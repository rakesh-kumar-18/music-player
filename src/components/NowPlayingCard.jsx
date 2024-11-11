import { useMusicPlayer } from "./MusicPlayerProvider";
import { FaPlay, FaPause, FaBackward, FaForward, FaRedo, FaRandom } from "react-icons/fa";
import SongImage from "../assets/images/play.png";

function NowPlayingCard() {
    const { pause, play, isPlaying, currentSong } = useMusicPlayer();

    return (
        <div className="bg-[#7a0c0c] p-4 mb-8 rounded-lg text-white w-64 shadow-lg">
            <h3 className="text-center text-sm font-semibold mb-2">Now Playing</h3>

            <div className="rounded-lg overflow-hidden mb-4">
                <img src={SongImage} alt={currentSong?.title || "Current Song"} className="w-full h-32 object-cover" />
            </div>

            <div className="text-center">
                <h4 className="text-lg font-bold">{currentSong?.title || "Beat It"}</h4>
                <p className="text-sm text-gray-300">{currentSong?.artist || "Michael Jackson"}</p>
            </div>

            <div className="flex items-center justify-between text-xs text-gray-300 mt-4">
                <span>2:15</span>
                <div className="flex-grow mx-2 h-1 bg-gray-600 rounded-full relative">
                    <div className="absolute left-0 top-0 h-full w-2/3 bg-white rounded-full"></div>
                </div>
                <span>4:18</span>
            </div>

            <div className="flex items-center justify-between mt-4">
                <FaRedo className="text-lg cursor-pointer" />
                <FaBackward className="text-lg cursor-pointer" />

                {isPlaying ? (
                    <FaPause onClick={pause} className="text-2xl bg-white text-[#7a0c0c] p-2 rounded-full cursor-pointer" />
                ) : (
                    <FaPlay onClick={play} className="text-2xl bg-white text-[#7a0c0c] p-2 rounded-full cursor-pointer" />
                )}

                <FaForward className="text-lg cursor-pointer" />
                <FaRandom className="text-lg cursor-pointer" />
            </div>
        </div>
    );
}

export default NowPlayingCard;
