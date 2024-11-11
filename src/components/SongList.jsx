import { DndContext, useSensor, useSensors, PointerSensor } from "@dnd-kit/core";
import { rectSortingStrategy, SortableContext, arrayMove } from "@dnd-kit/sortable";
import SongItem from "./SongItem";
import { useAudio } from "../contexts/AudioContext";

function SongList() {
    const { songs, setSongs } = useAudio();
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
