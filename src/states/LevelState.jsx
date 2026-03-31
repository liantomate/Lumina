import "../../styles/LevelState.css";
import { useEffect, useState } from "react";

import LevelNavigationBar from "../components/level_components/LevelNavigationBar";
import LevelHandler from "../levels/LeveHandler";
import RoundRenderer from "../levels/RoundRenderer";
import global_UserData from "../core/UserData";

export default function LevelState({ levelData, onMenuReturn })
{
    const [ currentLevelData, setCurrentLevelData ] = useState(levelData);
    const [ roundFinished, setRoundFinished ] = useState(0);

    useEffect(() =>
    {
        setCurrentLevelData(levelData);
        setRoundFinished(0);
    }, [levelData]);

    const handleNextLevel = () =>
    {
        const nextLevelData = global_UserData.getCurrentLevelData();

        if (nextLevelData)
        {
            setCurrentLevelData(nextLevelData);
            setRoundFinished(0);
        }
    };

    const levelHandler = new LevelHandler(currentLevelData, roundFinished, setRoundFinished);

    return (
        <div className="level-container">
            <LevelNavigationBar
                className="level-navigation_bar"
                progress={(roundFinished / currentLevelData.rounds_list.length) * 100}
            />

            <RoundRenderer
                className="level-round_renderer"
                levelHandler={levelHandler}
                onMenuReturn={onMenuReturn}
                onNextLevel={handleNextLevel}
            />
        </div>
    );
}