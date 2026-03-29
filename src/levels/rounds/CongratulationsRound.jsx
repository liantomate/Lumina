export default function CongratulationsRound({ levelHandler }) {
    const testAchievements = [
        { name: "Achievement 1", description: "Completed first task", icon: null },
        { name: "Achievement 2", description: "Second milestone", icon: null },
        { name: "Achievement 3", description: "Third milestone", icon: null },
        { name: "Achievement 4", description: "Fourth milestone", icon: null },
    ];

    const renderAchievement = (achievement) => (
        <div className="congrats-achievement">
            {achievement.icon && <img src={achievement.icon} alt={achievement.name} />}
            <h1>{achievement.name}</h1>
            {achievement.description && <p>{achievement.description}</p>}
        </div>
    );

    return (
        <div className="congrats-main-rect">
    <div className="congrats-left">
        {renderAchievement(testAchievements[0])}
        {renderAchievement(testAchievements[1])}
    </div>
    <div className="congrats-right">
        {renderAchievement(testAchievements[2])}
        {renderAchievement(testAchievements[3])}
    </div>
</div>
    );
}