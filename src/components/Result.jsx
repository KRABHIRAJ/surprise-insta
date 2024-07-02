import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import getUserData from "../constants/functions/getUserData";
import { setErrorMsg } from "../store/slices/profileSlice";
import { useNavigate, useParams } from "react-router-dom";
import { imageProxyUrl } from "../constants/api";
import { generateRandomQuotes } from "../constants/constant";

const Result = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [profileImg, setProfileImg] = useState("");
  const [name, setName] = useState("");
  const [quote, setQuote] = useState("");
  const dispatch = useDispatch();
  const naviagte = useNavigate();
  const params = useParams();

  const setUserData = (data) => {
    const pUrl = data?.result?.user?.hd_profile_pic_url_info?.url;
    const full_name = data?.result?.user?.full_name;
    const urlToHit = `${imageProxyUrl}?url=${encodeURIComponent(pUrl)}`;
    setProfileImg(urlToHit);
    setName(full_name);
    setQuote(generateRandomQuotes());
  }

  const fetchUserData = async () => {
    setIsLoading(true);
    try {
      const data = await getUserData(params?.instaId);
      if (data) {
        if(data?.result?.user?.has_anonymous_profile_picture === true){
            dispatch(setErrorMsg('Private account. We do not breach privacy 🩷.'));
            naviagte('/error')
        }else{
            localStorage.setItem(params?.instaId, JSON.stringify(data));
            setUserData(data);
        }
      }else{
        dispatch(setErrorMsg('Too Many Requests. Please try again after 2 minutes.'));
        naviagte('/error')
      }

    } catch (err) {
      dispatch(setErrorMsg(err));
      naviagte('/error')
    }finally{
        setIsLoading(false);
    }
  };
  useEffect(() => {
    const userData = localStorage.getItem(params?.instaId);
    const data = JSON.parse(userData);
    if(data){
        setUserData(data)
    }else{
        fetchUserData();
    }
  }, []);

  if (isLoading) {
    return (
      <div
        id="home-screen"
        className="flex flex-col items-center justify-center space-y-6 "
      >
        <h1 className="text-3xl text-white font-bold text-center">
          Finding You...!
        </h1>
      </div>
    );
  }
  return (
    <div>
      <p className="text-2xl text-center text-pink-700 px-4 mb-8">
        Hi👋🏾 {name} 🩷
      </p>
      <div className="flex flex-col items-center justify-center space-y-4">
        <div className="heart">
          <img
            src={profileImg}
            alt="user profile picture"
            crossOrigin="anonymous"
          />
        </div>

        <p className="text-2xl text-pink-700 text-center px-4">{quote}</p>

        <p className="text-4xl text-pink-700 text-center px-4">I 🩷 U</p>
      </div>
    </div>
  );
};

export default Result;
