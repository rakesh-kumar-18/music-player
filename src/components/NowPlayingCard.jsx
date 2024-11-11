import { FaPlay, FaPause, FaBackward, FaForward, FaRedo, FaRandom } from "react-icons/fa";
import SongImage from "../assets/images/play.png";
import { useAudio } from "../contexts/AudioContext";

function NowPlayingCard() {
    const {
        currentSong,
        isPlaying,
        currentTime,
        duration,
        isRepeat,
        isShuffle,
        togglePlay,
        handleNext,
        handlePrevious,
        seekTo,
        toggleRepeat,
        toggleShuffle
    } = useAudio();

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    return (
        <div className="bg-[#7a0c0c] p-4 mb-8 rounded-lg text-white w-64 shadow-lg">
            <h3 className="text-center text-sm font-semibold mb-2">Now Playing</h3>

            <div className="rounded-lg overflow-hidden mb-4">
                <img
                    src={currentSong?.image || SongImage}
                    alt={currentSong?.title || "Select a song"}
                    className="w-full h-32 object-cover"
                />
            </div>

            <div className="text-center">
                <h4 className="text-lg font-bold">{currentSong?.title || "Double click on a song"}</h4>
                <p className="text-sm text-gray-300">{currentSong?.album || "---"}</p>
            </div>

            <div className="flex items-center justify-between text-xs text-gray-300 mt-4">
                <span>{formatTime(currentTime)}</span>
                <div
                    className="flex-grow mx-2 h-1 bg-gray-600 rounded-full relative cursor-pointer"
                    onClick={(e) => {
                        const rect = e.currentTarget.getBoundingClientRect();
                        const percent = (e.clientX - rect.left) / rect.width;
                        seekTo(percent * duration);
                    }}
                >
                    <div
                        className="absolute left-0 top-0 h-full bg-white rounded-full"
                        style={{ width: `${(currentTime / duration) * 100}%` }}
                    ></div>
                </div>
                <span>{formatTime(duration)}</span>
            </div>

            <div className="flex items-center justify-between mt-4">
                <FaRedo
                    className={`text-lg cursor-pointer ${isRepeat ? 'text-red-300' : ''}`}
                    onClick={toggleRepeat}
                />
                <FaBackward
                    className="text-lg cursor-pointer"
                    onClick={handlePrevious}
                />
                {isPlaying ? (
                    <FaPause
                        onClick={togglePlay}
                        className="text-2xl bg-white text-[#7a0c0c] p-2 rounded-full cursor-pointer"
                    />
                ) : (
                    <FaPlay
                        onClick={togglePlay}
                        className="text-2xl bg-white text-[#7a0c0c] p-2 rounded-full cursor-pointer"
                    />
                )}
                <FaForward
                    className="text-lg cursor-pointer"
                    onClick={handleNext}
                />
                <FaRandom
                    className={`text-lg cursor-pointer ${isShuffle ? 'text-red-300' : ''}`}
                    onClick={toggleShuffle}
                />
            </div>
        </div>
    );
}

export default NowPlayingCard;
