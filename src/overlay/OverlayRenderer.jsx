import "../../styles/OverlayRenderer.css";

import { useEffect, useState } from "react";

import { eventSubscribe } from "../events/EventBus";
import { OVERLAY_EVENTS } from "../events/OverlayEvents";

import LumiDialogue from "../components/LumiDialogue";

export default function OverlayLayer()
{
    const [dialogue, setDialogue] = useState(null);

    useEffect(() => {
        const unsubShow = eventSubscribe(OVERLAY_EVENTS.DialogueStartEvent, (eventData) => {
            setDialogue(eventData);
        });

        const unsubHide = eventSubscribe(OVERLAY_EVENTS.DialogueEndEvent, () => {
            setDialogue(null);
        });

        return () => {
            unsubShow();
            unsubHide();
        };
    }, []);

    if (!dialogue) return null;

    return (
        <div className="overlay-layer">
            <LumiDialogue script={dialogue} className="overlay-dialogue"/>
        </div>
    );
}