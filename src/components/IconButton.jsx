import "../../styles/Component_IconButton.css";

import useSoundPlayer from "../hooks/UseSoundPlayerHook";
import SOUND_TYPES from "../utils/SoundTypes";

export default function IconButton({ imagePath, callback }) {
    const [ playSFX ] = useSoundPlayer(SOUND_TYPES.EXIT_CLICKED);

    const onButtonClick = () => {
        console.log("this should play");
        playSFX();
        callback();
    };

    return (
        <button className="component-icon_button" onClick={onButtonClick}>
            <img src={imagePath} alt="icon" />
        </button>
    );
}