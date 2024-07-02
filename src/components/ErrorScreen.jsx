import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ErrorScreen = () => {
    const errMsg = useSelector((state) => state.errorMsg);
    const navigate = useNavigate();
    const handleClick = () => {
        navigate('/')
    }
    return (
        <div id="home-screen" className="flex flex-col items-center justify-center space-y-6">
            <h1 className="text-3xl text-white font-bold text-center px-4">{errMsg}</h1>
            <button onClick={handleClick} className="w-3/4 p-3 bg-pink-500 text-white rounded-full text-xl font-bold hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-700">Try Again</button>
        </div>
    )
}

export default ErrorScreen;