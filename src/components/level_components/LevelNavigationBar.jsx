import "../../../styles/Component_LevelNavigationBar.css";
import global_StateManager from "../../states/StateManager";

import { STATE_TYPES } from "../../states/StateTypes";

import ProgressBar from "../ProgressBar";
import IconButton from "../IconButton";

export default function LevelNavigationBar({ progress }) 
{
    return (
        <div className="component-level_navigation_bar">
            <ProgressBar className="component-level_navigation_bar-progress_bar" value={progress} />
                <IconButton className="component-level_navigation_bar-exit_button" imagePath={"../../assets/svgs/exit_icon.svg"} callback={() => {
                    global_StateManager.setState(STATE_TYPES.MENU);
                }}/>
        </div>
    );
}