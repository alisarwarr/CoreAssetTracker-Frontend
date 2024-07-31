//REACT-ROUTER-DOM
import { useNavigate } from 'react-router-dom';
//COMPONENTS
import Home from '../components/Home';


export default function Page(): JSX.Element {
    const navigate = useNavigate();


    const accessToken = JSON.parse(localStorage.getItem("accessToken") || 'null');


    if (accessToken) return <Home/>;


    return (
        <div className="bg-gradient-to-br from-purple-500 to-pink-500 text-white min-h-screen flex items-center justify-center">
            <div className="max-w-3xl mx-auto text-center px-6">
                <h1 className="text-4xl sm:text-5xl font-bold mb-4">CoreAssetTracker</h1>
                <p className="text-lg mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla at tellus augue.</p>
                <div className="flex justify-center gap-5">
                    <button
                        className="bg-red-500 text-white font-medium py-1.5 px-2.5 sm:py-3 sm:px-6 rounded-md flex items-center justify-center transition-all duration-200 hover:shadow-lg text-xs sm:text-sm"
                        onClick={() => navigate("/login")}
                    >
                        Log In
                    </button>
                    <button
                        className="bg-blue-500 text-white font-medium py-1.5 px-2.5 sm:py-3 sm:px-6 rounded-md flex items-center justify-center transition-all duration-200 hover:shadow-lg text-xs sm:text-sm"
                        onClick={() => navigate("/signup")}
                    >
                        Sign Up
                    </button>
                </div>
            </div>
        </div>
    );
}