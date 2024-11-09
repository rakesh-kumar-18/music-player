import SongItem from "./SongItem";

function SongList() {
    const songs = [
        { title: "Billie Jean", src: "/music/billie_jean.mp3" },
        { title: "Beat It", src: "/music/beat_it.mp3" },
    ];

    return (
        <div className="text-white">
            <h3 className="text-lg font-bold p-2">Popular</h3>
            <div>
                {songs.map((song, index) => (
                    <SongItem key={index} title={song.title} src={song.src} />
                ))}
            </div>
        </div>
    );
}

export default SongList;
