import "../../styles/Component_SideBar.css"

import { useState } from "react";

import TextButton from "./TextButton"; 
import IconButton from "./IconButton"; 

import PopupPanel from "./PopupPanel";

export default function SideBar() {
    const [isSettingsPanelOpen, setIsSettingsPanelOpen] = useState(false);
    const [isAchievementsPanelOpen, setIsAchievementsPanelOpen] = useState(false);
    const [isMoreSettingsPanelOpen, setIsMoreSettingsPanelOpen] = useState(false);

    return (<>
        <div className="component-sidebar">
            <TextButton text="Achievements"  callback={() => setIsAchievementsPanelOpen(true)} />
            <TextButton text="Settings"      callback={() => setIsSettingsPanelOpen(true)} />
            <TextButton text="More Settings" callback={() => setIsMoreSettingsPanelOpen(true)} />

            <PopupPanel isActive={isSettingsPanelOpen} setActive={setIsSettingsPanelOpen} children={<h1>Settings</h1>} />
            <PopupPanel isActive={isAchievementsPanelOpen} setActive={setIsAchievementsPanelOpen} children={<h1>Achievements</h1>} />
            <PopupPanel isActive={isMoreSettingsPanelOpen} setActive={setIsMoreSettingsPanelOpen} children={<h1>More Settings</h1>} />
        <IconButton imagePath="../../assets/svgs/github_icon.svg" callback={() => {
            window.open("https://github.com/liantomate/web_design_cpe_olympiad_2026", "_blank");
        }} />
        <IconButton imagePath="../../assets/svgs/wikipedia_icon.svg" callback={() => {
            window.open("https://en.wikipedia.org/wiki/Computer_engineering", "_blank");
        }}/>
        </div>
    </>);
}