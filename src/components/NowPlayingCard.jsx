import { useMusicPlayer } from "./MusicPlayerProvider";

function NowPlayingCard() {
    const { pause, isPlaying } = useMusicPlayer();

    return (
        <div className="bg-red-800 p-4 rounded-lg text-white w-64">
            <h3 className="text-lg font-bold">Now Playing</h3>
            <div className="my-4">Beat It - Michael Jackson</div>
            <div className="flex justify-between">
                <button onClick={pause}>{isPlaying ? "Pause" : "Play"}</button>
            </div>
        </div>
    );
}

export default NowPlayingCard;
