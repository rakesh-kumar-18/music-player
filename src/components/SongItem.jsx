/* eslint-disable react/prop-types */
import { useMusicPlayer } from "./MusicPlayerProvider";

function SongItem({ title, src }) {
    const { playSong, isPlaying } = useMusicPlayer();

    return (
        <div
            onClick={() => playSong(src)}
            className={`p-2 flex justify-between items-center cursor-pointer ${isPlaying ? "bg-red-500" : "bg-transparent"
                }`}
        >
            <span>{title}</span>
            <span>4:18</span>
        </div>
    );
}

export default SongItem;
