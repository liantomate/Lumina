import { emit } from "../events/EventBus"
import { STATE_TYPES } from "./StateTypes"
import { STATE_EVENTS, StateChangeEvent } from "./StateEvents"

export default class StateManager
{
    constructor(defaultState)
    {
        this._state = defaultState;
    }

    // Sets the current state to a new one given
    setCurrentState(newState)
    {
        if(this.newState === null || this.newState === STATE_TYPES.NULL) return;
        emit(STATE_EVENTS.StateChangeEvent, new StateChangeEvent(this._state, newState));
        this._state = newState; 
    }

    // Returns the active state
    getCurrentState()
    {
        return this._state;
    }
}