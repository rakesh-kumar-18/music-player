/* eslint-disable react/prop-types */
import { createContext, useContext, useState, useRef, useEffect } from 'react';

const AudioContext = createContext();

export function AudioProvider({ children }) {
    const [currentSong, setCurrentSong] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [isRepeat, setIsRepeat] = useState(false);
    const [isShuffle, setIsShuffle] = useState(false);
    const audioRef = useRef(new Audio());

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
    }, [isRepeat]);

    const playSong = (song) => {
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
    };

    const handleNext = () => {
        // Implementation depends on your playlist management
    };

    const handlePrevious = () => {
        if (currentTime > 3) {
            audioRef.current.currentTime = 0;
        } else {
            // Implementation depends on your playlist management
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

    const toggleRepeat = () => setIsRepeat(!isRepeat);
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
