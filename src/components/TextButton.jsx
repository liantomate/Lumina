import "../../styles/Component_TextButton.css";

import { eventEmit } from "../events/EventBus";
import SOUND_TYPES from "../utils/SoundTypes";
import { SOUND_EVENTS, SoundRequestEvent } from "../utils/SoundEvent";

export default function TextButton({ text, callback, toggled=false }) {
    const onButtonClick = () => {
        eventEmit(SOUND_EVENTS.SoundRequestEvent, new SoundRequestEvent(SOUND_TYPES.BUTTON_CLICKED));
        callback();
    };

    return (
        <>
            <button className={`component-text_button ${toggled ? 'component-text_button-toggled' : ''}`} onClick={onButtonClick}>{text}</button>
        </>
    );
}