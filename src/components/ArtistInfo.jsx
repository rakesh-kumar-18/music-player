import { FaCheckCircle } from "react-icons/fa";
import BackgroundImage from "../assets/artistbackground.png";
import ArtistImage from "../assets/michael.png";

function ArtistInfo() {
    return (
        <div
            className="relative p-16 m-16 mb-2 text-[#F6F6F6] rounded-xl h-[100px] lg:h-[200px] flex items-center"
            style={{
                backgroundImage: `url(${BackgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            <img
                src={ArtistImage}
                alt="Michael Jackson"
                className="absolute right-40 bottom-20 transform translate-x-1/4 translate-y-1/4 w-72 h-auto"
            />

            <div className="relative z-10 max-w-xs">
                <div className="flex items-center space-x-2">
                    <FaCheckCircle className="text-blue-500" />
                    <span className="text-sm text-[#CFC5C5]">Verified Artist</span>
                </div>
                <h2 className="text-3xl font-bold mb-6">Michael Jackson</h2>
                <p>27,852,501 monthly listeners</p>
            </div>
        </div>
    );
}

export default ArtistInfo;
