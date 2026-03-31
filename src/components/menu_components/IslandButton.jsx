import "../../../styles/Component_IslandButton.css";

import global_StateManager from "../../states/StateManager";
import { STATE_TYPES } from "../../states/StateTypes";

import LEVEL_DATA from "../../core/LevelData";
import global_UserData from "../../core/UserData";

import useSoundPlayer from "../../hooks/UseSoundPlayerHook";
import SOUND_TYPES from "../../utils/SoundTypes";

export default function IslandButton({ imageSrc, yPos, scale=100, flex=1 }) {
    const [ playSFX ] = useSoundPlayer(SOUND_TYPES.ISLAND_CLICKED);

    const onButtonClick = () => {
        playSFX();
        setTimeout(() => {
            global_StateManager.setState(
                        STATE_TYPES.LEVEL,
                        LEVEL_DATA[`${global_UserData.currentIsland}${global_UserData.currentLevel}`]
                    );
        }, 1000);
    };

    return (
        <div
            className="component-island"
            style={{ top: `${yPos}%`, scale: `${scale}%`, flex: `${flex}` }}
            onClick={onButtonClick}>
            <img src={imageSrc} alt="Island" />
        </div>
    );
}