/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useRef, useEffect, useCallback } from 'react';
import One from "../assets/images/1.png";
import Three from "../assets/images/3.png";
import Four from "../assets/images/4.png";
import Five from "../assets/images/5.png";
import BillieJean from "../assets/music/billie_jean.mp3";
import BeatIt from "../assets/music/beat_it.mp3";
import SmoothCriminal from "../assets/music/smooth_criminal.mp3";
import DontStop from "../assets/music/dont_stop.mp3";
import RockWithYou from "../assets/music/rock_with_you.mp3";

const AudioContext = createContext();

const initialSongs = [
    {
        id: 1,
        title: "Billie Jean",
        src: BillieJean,
        playCount: "1,040,811,084",
        duration: "4:53",
        album: "Thriller 25 Super Deluxe Edition",
        image: One,
    },
    {
        id: 2,
        title: "Beat It",
        src: BeatIt,
        playCount: "643,786,045",
        duration: "4:18",
        album: "Thriller 25 Super Deluxe Edition",
        image: One,
    },
    {
        id: 3,
        title: "Smooth Criminal - 2012 Remaster",
        src: SmoothCriminal,
        playCount: "407,234,004",
        duration: "4:17",
        album: "Thriller 25 Super Deluxe Edition",
        image: Three,
    },
    {
        id: 4,
        title: "Don't Stop 'Til You Get Enough",
        src: DontStop,
        playCount: "316,391,952",
        duration: "6:05",
        album: "Bad 25th Anniversary Edition",
        image: Four,
    },
    {
        id: 5,
        title: "Rock With You - Single Version",
        src: RockWithYou,
        playCount: "268,187,218",
        duration: "3:40",
        album: "Off The Wall",
        image: Five,
    },
];

export function AudioProvider({ children }) {
    const [currentSong, setCurrentSong] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isRepeat, setIsRepeat] = useState(false);
    const [isShuffle, setIsShuffle] = useState(false);
    const [songs, setSongs] = useState(initialSongs);
    const audioRef = useRef(new Audio());

    const playSong = useCallback((song) => {
        if (currentSong?.id === song.id) {
            if (isPlaying) {
                audioRef.current.pause();
                setIsPlaying(false);
            } else {
                audioRef.current.play();
                setIsPlaying(true);
            }
        } else {
            audioRef.current.src = song.src;
            audioRef.current.play();
            setCurrentSong(song);
            setIsPlaying(true);
        }
    }, [currentSong, isPlaying, setCurrentSong, setIsPlaying, audioRef]);

    const handleNext = useCallback(() => {
        const currentIndex = songs.findIndex((song) => song.id === currentSong.id);
        const nextSong = songs[(currentIndex + 1) % songs.length];
        playSong(nextSong);
    }, [songs, currentSong, playSong]);

    useEffect(() => {
        const audio = audioRef.current;

        const handleTimeUpdate = () => setCurrentTime(audio.currentTime);
        const handleDurationChange = () => setDuration(audio.duration);
        const handleEnded = () => {
            if (isRepeat) {
                audio.currentTime = 0;
                audio.play();
            } else {
                handleNext();
            }
        };

        audio.addEventListener('timeupdate', handleTimeUpdate);
        audio.addEventListener('durationchange', handleDurationChange);
        audio.addEventListener('ended', handleEnded);

        return () => {
            audio.removeEventListener('timeupdate', handleTimeUpdate);
            audio.removeEventListener('durationchange', handleDurationChange);
            audio.removeEventListener('ended', handleEnded);
        };
    }, [isRepeat, handleNext]);

    const handlePrevious = () => {
        if (currentTime > 3) {
            audioRef.current.currentTime = 0;
        } else {
            const currentIndex = songs.findIndex((song) => song.id === currentSong.id);
            const prevSong = songs[(currentIndex - 1 + songs.length) % songs.length];
            playSong(prevSong);
        }
    };

    const togglePlay = () => {
        if (isPlaying) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const seekTo = (value) => {
        audioRef.current.currentTime = value;
        setCurrentTime(value);
    };

    const toggleRepeat = () => {
        setIsRepeat(!isRepeat);
        audioRef.current.loop = !isRepeat;
    };
    const toggleShuffle = () => setIsShuffle(!isShuffle);

    return (
        <AudioContext.Provider
            value={{
                currentSong,
                isPlaying,
                currentTime,
                duration,
                isRepeat,
                isShuffle,
                songs,
                setSongs,
                playSong,
                togglePlay,
                handleNext,
                handlePrevious,
                seekTo,
                toggleRepeat,
                toggleShuffle,
            }}
        >
            {children}
        </AudioContext.Provider>
    );
}

export const useAudio = () => useContext(AudioContext);
