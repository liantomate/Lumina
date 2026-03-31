export const SOUND_EVENTS =
{
    "SoundRequestEvent": "SoundRequestEvent",
}

export class SoundRequestEvent
{
    constructor(soundType)
    {
        this.soundType = soundType;
    }
}