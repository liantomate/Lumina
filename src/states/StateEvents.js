export const STATE_EVENTS = {
    StateChangeEvent: "StateChangeEvent",
};

// Triggers when state change from one to another
export class StateChangeEvent
{
    constructor(oldState, newState)
    {
        this.oldState = oldState;
        this.newState = newState;
    }
}