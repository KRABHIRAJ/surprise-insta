import { useState } from "react";
import "../index.css";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const [instaId, setInstaId] = useState("");
  const navigate = useNavigate();
  const handleClick = async () => {
    if (instaId.length > 0) {
      navigate(`/${instaId.toLowerCase()}`);
      setInstaId("");
    }
  };
  return (
    <div
      id="home-screen"
      className="flex flex-col items-center justify-center space-y-6"
    >
      <h1 className="text-3xl text-white font-bold text-center">
        Enter your Instagram ID to see the Surprise!
      </h1>
      <input
        type="text"
        value={instaId}
        onChange={(e) => setInstaId(e.target.value)}
        placeholder="Instagram ID"
        className="w-3/4 p-3 rounded-full border-2 border-white focus:outline-none focus:ring-2 focus:ring-pink-500"
      />
      <button
        onClick={handleClick}
        className="w-3/4 p-3 bg-pink-500 text-white rounded-full text-xl font-bold hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-700"
      >
        Submit
      </button>
    </div>
  );
};

export default Home;
