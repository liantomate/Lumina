import { useState, useEffect } from "react";
import "../../../styles/Island02BreadboardRound.css";

export default function Island02BreadboardRound({ levelHandler }) {
    const [placedOrder, setPlacedOrder] = useState([]);
    const [shaking, setShaking] = useState(false);
    const [showGuide, setShowGuide] = useState(false);
    const [consecutiveMistakes, setConsecutiveMistakes] = useState(0);
    const [draggedItem, setDraggedItem] = useState(null);
    const [bootText, setBootText] = useState("INITIALIZING ENGINEERING MODULE...");

    useEffect(() => {
        const timer = setTimeout(() => setBootText("SYSTEM READY. AWAITING INPUT."), 1500);
        return () => clearTimeout(timer);
    }, []);

    const correctOrder = ["breadboard", "battery", "switch", "resistor", "led", "led_2", "buzzer", "push_button"];
    
    const inventoryItems = [
        { id: "battery", label: "Battery" },
        { id: "switch", label: "Switch" },
        { id: "resistor", label: "Resistor" },
        { id: "led", label: "LED 1" },
        { id: "led_2", label: "LED 2" },
        { id: "buzzer", label: "Buzzer" },
        { id: "push_button", label: "Push Button" }
    ];

    const handleDrop = (itemType) => {
        if (!itemType) return;
        const nextExpected = correctOrder[placedOrder.length];

        if (itemType === nextExpected) {
            const newOrder = [...placedOrder, itemType];
            setPlacedOrder(newOrder);
            setConsecutiveMistakes(0);
            
            if (newOrder.length === correctOrder.length) {
                if(levelHandler) {
                    levelHandler.pushAchievement({ id: "circuit_crusader", name: "Circuit Crusader" });
                    setTimeout(() => levelHandler.setNextRound(), 5000);
                }
            }
        } else {
            setShaking(true);
            setTimeout(() => setShaking(false), 500);
            setConsecutiveMistakes(prev => {
                const val = prev + 1;
                if (val >= 3) setShowGuide(true);
                return val;
            });
        }
        setDraggedItem(null);
    };

    return (
        <div className={`circuit-level-root ${shaking ? "screen-shake" : ""}`}>
            {/* SIDEBAR */}
            <div className="circuit-sidebar">
                <h2 className="sidebar-title">ENGINEERING KIT</h2>
                <p className="sidebar-boot-text">{bootText}</p>
                <div className="inventory-scroll">
                    {!placedOrder.includes("breadboard") && (
                        <div className="inv-card" draggable onDragStart={() => setDraggedItem("breadboard")}>
                            <img src="/assets/images/circuitround/breadboard.png" alt="BB" style={{ width: "50px" }} />
                            <span>Breadboard</span>
                        </div>
                    )}
                    {inventoryItems.map(item => !placedOrder.includes(item.id) && (
                        <div key={item.id} className="inv-card" draggable onDragStart={() => setDraggedItem(item.id)}>
                            <img src={`/assets/images/circuitround/${item.id.replace('_2', '')}.png`} alt={item.label} />
                            <span>{item.label}</span>
                        </div>
                    ))}
                </div>
            </div>

            {/* WORKSPACE */}
            <div className="circuit-area" onDragOver={e => e.preventDefault()} onDrop={() => handleDrop(draggedItem)}>
                
                <div className={`board-target ${placedOrder.includes("breadboard") ? "is-placed" : "is-empty"}`}>
                    {!placedOrder.includes("breadboard") ? (
                        <div className="drop-prompt">
                            {"> "} READY FOR ASSEMBLY: DEPLOY BREADBOARD
                        </div>
                    ) : (
                        <div className="board-container">
                            <img src="/assets/images/circuitround/breadboard.png" className="bb-image" alt="Breadboard" />
                            {placedOrder.includes("battery") && <div className="power-rail-glow"></div>}
                            {placedOrder.map(id => id !== "breadboard" && (
                                <img key={id} src={`/assets/images/circuitround/${id.replace('_2', '')}.png`} className={`part ${id}`} alt={id}/>
                            ))}
                        </div>
                    )}
                </div>

                {/* STATUS PANEL */}
                <div className="circuit-status-bar">
                    <div className="status-item">
                        <span className="status-dot" style={{ backgroundColor: placedOrder.length > 0 ? "#2ecc71" : "#e74c3c" }}></span>
                        LOGIC: {placedOrder.length > 0 ? "STABLE" : "STANDBY"}
                    </div>
                    <div className="status-item">NODES: {placedOrder.length}/{correctOrder.length}</div>
                    <div className="status-item">V_IN: {placedOrder.includes("battery") ? "1.52V" : "0.00V"}</div>
                </div>

                {showGuide && (
                    <div className="guide-tooltip">
                        ANALYSIS: INSTALL {correctOrder[placedOrder.length].toUpperCase().replace('_', ' ')}
                    </div>
                )}
            </div>

            {/* VICTORY OVERLAY */}
            {placedOrder.length === correctOrder.length && (
                <div className="victory-overlay">
                    <div className="victory-card">
                        <div className="victory-icon-large">⚡</div>
                        <h1>CIRCUIT CRUSADER</h1>
                        <p className="victory-sub">-- SYSTEM OPTIMIZED --</p>
                        <div className="victory-explanation">
                            <p>Electronics Engineering involves designing, assembling, and correctly connecting components to create a functional system. System design ensures every part works in harmony.</p>
                        </div>
                        <p className="victory-footer">Dumping Achievement Logs to Database...</p>
                    </div>
                </div>
            )}
        </div>
    );
}