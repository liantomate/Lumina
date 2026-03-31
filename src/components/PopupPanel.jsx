import "../../styles/Component_PopupPanel.css";

import IconButton from "./IconButton";

export default function PopupPanel({ isActive, setActive, children }) {
    return (
        <div className="component-popup_panel">
            {isActive && (
                <IconButton imagePath="../../assets/svgs/exit_icon.svg" callback={() => setActive(null)} />
            )}
            {isActive && children}
        </div>
    );
}