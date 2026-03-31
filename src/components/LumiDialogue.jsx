import React, { useState } from 'react';
import '../../styles/LumiDialogue.css';

const LumiDialogue = ({ script, onComplete }) => {
    // Keeps track of which line of dialogue we are currently on
    const [currentIndex, setCurrentIndex] = useState(0);

    // Safety check: If there's no script, render nothing to prevent crashes
    if (!script || script.length === 0) return null;

    const handleNext = () => {
        if (currentIndex < script.length - 1) {
            // Move to the next line
            setCurrentIndex(currentIndex + 1);
        } else {
            // If we are on the last line, tell the parent component we are done!
            if (onComplete) onComplete();
        }
    };

    // Grab the current line of dialogue from the array
    const currentLine = script[currentIndex];

    return (
        <div className="component-lumi_dialogue_overlay" onClick={handleNext}>
            <div className="component-lumi_dialogue_box">
                
                {/* Portrait - The CSS uses the emotion to swap the image */}
                <div className={`component-lumi_dialogue_portrait emotion-${currentLine.emotion}`}>
                </div>

                {/* Text Content */}
                <div className="component-lumi_dialogue_content">
                    <h3 className="component-lumi_dialogue_name">{currentLine.speaker}</h3>
                    <p className="component-lumi_dialogue_text">{currentLine.text}</p>
                    <span className="component-lumi_dialogue_prompt">▼ Click anywhere to continue</span>
                </div>

            </div>
        </div>
    );
};

export default LumiDialogue;