import { useEffect } from 'react';
import { useSound } from '../hooks/UseSoundHook';

export function Sound({ soundPath, shouldPlay, options = {} }) {
    const { play, error } = useSound(soundPath, options); 

    useEffect(() => {
        if (shouldPlay) play().catch((err) => console.error('Playback failed:', err));
    }, [shouldPlay, play]);
    if (error) console.error('Sound error:', error);  

    return null;
}