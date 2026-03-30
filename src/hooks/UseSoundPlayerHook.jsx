import { useRef, useEffect } from 'react';

export default function useSoundPlayer(soundPaths) {
    const audioMap = useRef(new Map()); 
    
    useEffect(() => {
        soundPaths.forEach((path) => {
            if (!audioMap.current.has(path)) 
            {
                const audio = new Audio(path);
                audio.preload = 'auto';
                audioMap.current.set(path, audio);
            }
        });
    }, [soundPaths]);

    const playRandom = () => {
        const randomPath = soundPaths[Math.floor(Math.random() * soundPaths.length)];
        const audio = audioMap.current.get(randomPath);
        if (audio) {
            audio.currentTime = 0;
            audio.play().catch((err) => console.error('[DEBUG, UseSoundPlayerHook] Playback failed:', err));
        } else console.error('[DEBUG, UseSoundPlayerHook] Sound not preloaded:', randomPath);
    }; 

    return [ playRandom ];
}