import "../../styles/Component_IconButton.css";

import SOUND_TYPES from "../utils/SoundTypes";
import { SOUND_EVENTS, SoundRequestEvent } from "../utils/SoundEvent";
import { eventEmit } from "../events/EventBus";

export default function IconButton({ imagePath, callback }) {
    const onButtonClick = () => {
        eventEmit(SOUND_EVENTS.SoundRequestEvent, new SoundRequestEvent(SOUND_TYPES.EXIT_CLICKED));
        callback();
    };

    return (
        <button className="component-icon_button" onClick={onButtonClick}>
            <img src={imagePath} alt="icon" />
        </button>
    );
}