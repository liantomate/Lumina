import "../../../styles/Component_IslandPopup.css";

import global_StateManager from "../../states/StateManager";
import { STATE_TYPES } from "../../states/StateTypes";
import ISLAND_DATA from "../../core/IslandData";
import LEVEL_DATA from "../../core/LevelData";

import PopupPanel from "../PopupPanel";
import ProgressBar from "../ProgressBar";

import global_UserData from "../../core/UserData";
import TextButton from "../TextButton";

export default function IslandPopup({ isActive = false, setActive = (val) => {}, targetIsland = 1 })
{
    const userCurrentIsland = global_UserData.currentIsland;
    const userCurrentLevel = global_UserData.currentLevel;
    let progress = userCurrentLevel / global_UserData.getCurrentLevelData().rounds_list.length;

    if(!isActive) return <></>;

    // Island is correct, let them pass
    // Island is not yet done
    if(userCurrentIsland < targetIsland)
    {
        progress = 0;
        return (
        <PopupPanel className="component-island_popup" isActive={isActive} setActive={setActive}>
            <h1>Island #{targetIsland}</h1>
            <ProgressBar value={progress}/>
            <h3>Finish the previous islands to proceed :3</h3>
        </PopupPanel>);
    }
    else if(userCurrentIsland > targetIsland)
    {
        progress = 1;
        return (
        <PopupPanel className="component-island_popup" isActive={isActive} setActive={setActive}>
            <h1>Island #{targetIsland}</h1>
            <ProgressBar value={progress}/>
            <h3>Island already explored! Go Beyond!</h3>
        </PopupPanel>);
    }

    return (
    <PopupPanel className="component-island_popup" isActive={isActive} setActive={setActive}>
        <h1>Island #{targetIsland}</h1>
        <ProgressBar value={progress}/>
        <TextButton text={"Explore Island"} callback={() =>
        {
            global_StateManager.setState(
                STATE_TYPES.LEVEL,
                LEVEL_DATA[ISLAND_DATA[targetIsland][userCurrentLevel]]
            );
            setActive(null);
        }}></TextButton>
    </PopupPanel>);
}