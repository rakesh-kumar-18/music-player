/* eslint-disable react/prop-types */
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { FaMusic } from "react-icons/fa";
import { useAudio } from "../contexts/AudioContext";

function SongItem({ id, index, song }) {
    const { currentSong, playSong } = useAudio();
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });
    const isCurrent = currentSong?.id === song.id;

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };

    return (
        <div
            ref={setNodeRef}
            style={style}
            {...attributes}
            {...listeners}
            className={`grid grid-cols-[30px_1fr_150px_80px_1fr] gap-4 items-center p-1 rounded-md 
            ${isCurrent ? "bg-[#7a0c0c]" : "bg-transparent"} hover:bg-[#5c0a0a]`}
        >
            <div
                className="contents cursor-pointer"
                onClick={() => playSong(song)}
            >
                <div>
                    {isCurrent ? (
                        <FaMusic className="text-[#F6F6F6] text-lg" />
                    ) : (
                        <span className="text-[#CFC5C5]">{index}</span>
                    )}
                </div>

                <div className="flex items-center space-x-3">
                    <img src={song.image} alt={song.title} className="w-10 h-10 rounded" />
                    <span className={`truncate ${isCurrent ? "text-[#F6F6F6] font-semibold" : "text-[#F6F6F6]"}`}>
                        {song.title}
                    </span>
                </div>

                <span className={`${isCurrent ? "text-[#F6F6F6] font-semibold" : "text-[#CFC5C5]"}`}>{song.playCount}</span>

                <span className={`${isCurrent ? "text-[#F6F6F6] font-semibold" : "text-[#CFC5C5]"}`}>{song.duration}</span>

                <span className={`truncate text-right ${isCurrent ? "text-[#F6F6F6] font-semibold" : "text-[#CFC5C5]"}`}>
                    {song.album}
                </span>
            </div>
        </div>
    );
}

export default SongItem;
