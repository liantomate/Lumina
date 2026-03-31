import "../../../styles/Island01ArticleRound.css";
import { useState } from "react";
import global_UserData from "../../core/UserData";

function GetScoreIndex(score, options)
{
    const fallbackScore = score || 0;

    if (!options || !Array.isArray(options) || options.length === 0) return 0;

    for (let i = 0; i < options.length; i++)
    {
        const bounds = options[i].split("-");
        const min = parseInt(bounds[0], 10);
        const max = parseInt(bounds[1], 10);

        if (fallbackScore >= min && fallbackScore <= max)
        {
            return i;
        }
    }

    return 0;
}

export default function Island01ArticleRound({ levelHandler })
{
    const roundData = levelHandler.getCurrentRoundData();

    // Fallback arrays prevent React from crashing when mapping over undefined data
    const options = roundData?.options || ["0-100"];
    const headers = roundData?.headers || ["Loading Data..."];
    const contents = roundData?.contents || ["Please wait while the results load."];

    let userScore = 0;
    try 
    {
        if (global_UserData && global_UserData.data) 
        {
            userScore = global_UserData.data["island_01-total_points"] || 0;
        }
    } 
    catch (error) 
    {
        console.warn("Could not retrieve user score:", error);
    }

    const initialIndex = GetScoreIndex(userScore, options);
    const [ activeButton, setActiveButton ] = useState(initialIndex);

    // --- NEW: The function to handle moving to the next round! ---
    const handleNextClick = () => 
    {
        // Replace '.completeRound()' with whatever your LevelHandler uses to advance!
        // It might be .nextRound(), .advance(), or something similar.
        if (levelHandler && levelHandler.completeRound) {
            levelHandler.completeRound();
        } else {
            console.log("Next button clicked! Check your LevelHandler for the right advance function.");
        }
    };

    return (
        <div className="round-island01_article">
            <div className="round-island01_article-buttons">
                {headers.map((header, index) => (
                    <button
                        key={index}
                        className={`round-island01_article-button ${activeButton === index ? "round-island01_article-button_active" : ""}`}
                        onClick={() => setActiveButton(index)}
                    >
                        {header}
                    </button>
                ))}
            </div>
            
            <div className="round-island01_article-panel">
                <h2 className="round-island01_article-header">
                    {headers[activeButton]}
                </h2>
                <p className="round-island01_article-content">
                    {contents[activeButton]}
                </p>
            </div>

            {/* --- NEW: The Next Button Container --- */}
            <div className="round-island01_article-footer">
                <button 
                    className="component-text_button" 
                    onClick={handleNextClick}
                >
                    NEXT
                </button>
            </div>
            
        </div>
    );
}