import dialogueData from "../../assets/data/LumiDialogue.json";

export const OVERLAY_EVENTS =
{
    DialogueStartEvent: "DialogueStartEvent",
    DialogueEndEvent: "DialogueEndEvent"
};

export class DialogueStartEvent
{
    constructor(dialogueKey)
    {
        this.speaker = dialogueData[dialogueKey]["speaker"];
        this.emotion = dialogueData[dialogueKey]["emotion"];
        this.text = dialogueData[dialogueKey]["text"];
    }
}

export class DialogueEndEvent
{
    constructor()
    {
    }
}