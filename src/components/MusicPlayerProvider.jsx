/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";
import { Howl } from "howler";

const MusicPlayerContext = createContext();

export function MusicPlayerProvider({ children }) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [howl, setHowl] = useState(null);

    const playSong = (src) => {
        if (howl) howl.stop();
        const newHowl = new Howl({ src });
        newHowl.play();
        setHowl(newHowl);
        setIsPlaying(true);
    };

    const pause = () => {
        if (howl) {
            howl.pause();
            setIsPlaying(false);
        }
    };

    return (
        <MusicPlayerContext.Provider value={{ playSong, pause, isPlaying }}>
            {children}
        </MusicPlayerContext.Provider>
    );
}

export const useMusicPlayer = () => {
    return useContext(MusicPlayerContext);
};
