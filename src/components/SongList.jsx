import { useState } from "react";
import { DndContext, useSensor, useSensors, PointerSensor } from "@dnd-kit/core";
import { rectSortingStrategy, SortableContext, arrayMove } from "@dnd-kit/sortable";
import SongItem from "./SongItem";
import One from "../assets/images/1.png";
import Three from "../assets/images/3.png";
import Four from "../assets/images/4.png";
import Five from "../assets/images/5.png";

function SongList() {
    const initialSongs = [
        {
            id: 1,
            title: "Billie Jean",
            src: "../assets/music/billie_jean.mp3",
            playCount: "1,040,811,084",
            duration: "4:53",
            album: "Thriller 25 Super Deluxe Edition",
            image: One,
        },
        {
            id: 2,
            title: "Beat It",
            src: "../assets/music/beat_it.mp3",
            playCount: "643,786,045",
            duration: "4:18",
            album: "Thriller 25 Super Deluxe Edition",
            image: One,
        },
        {
            id: 3,
            title: "Smooth Criminal - 2012 Remaster",
            src: "../assets/music/smooth_criminal.mp3",
            playCount: "407,234,004",
            duration: "4:17",
            album: "Thriller 25 Super Deluxe Edition",
            image: Three,
        },
        {
            id: 4,
            title: "Don't Stop 'Til You Get Enough",
            src: "../assets/music/dont_stop.mp3",
            playCount: "316,391,952",
            duration: "6:05",
            album: "Bad 25th Anniversary Edition",
            image: Four,
        },
        {
            id: 5,
            title: "Rock With You - Single Version",
            src: "../assets/music/rock_with_you.mp3",
            playCount: "268,187,218",
            duration: "3:40",
            album: "Off The Wall",
            image: Five,
        },
    ];

    const [songs, setSongs] = useState(initialSongs);
    const sensors = useSensors(useSensor(PointerSensor));

    const handleDragEnd = (event) => {
        const { active, over } = event;
        if (active.id !== over.id) {
            const oldIndex = songs.findIndex((song) => song.id === active.id);
            const newIndex = songs.findIndex((song) => song.id === over.id);
            setSongs((songs) => arrayMove(songs, oldIndex, newIndex));
        }
    };

    return (
        <DndContext sensors={sensors} onDragEnd={handleDragEnd}>
            <SortableContext items={songs} strategy={rectSortingStrategy}>
                <div className="text-[#CFC5C5] p-4 mx-16">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-bold text-[#F6F6F6]">Popular</h3>
                        <span className="text-sm text-[#CFC5C5] cursor-pointer">See All</span>
                    </div>

                    <div className="grid grid-cols-[30px_1fr_150px_80px_1fr] gap-4 mb-2 text-sm font-semibold pb-2">
                        <span>#</span>
                        <span>TITLE</span>
                        <span>PLAYING</span>
                        <span>TIME</span>
                        <span className="text-right">ALBUM</span>
                    </div>

                    <div>
                        {songs.map((song, index) => (
                            <SongItem key={song.id} id={song.id} index={index + 1} song={song} />
                        ))}
                    </div>
                </div>
            </SortableContext>
        </DndContext>
    );
}

export default SongList;
