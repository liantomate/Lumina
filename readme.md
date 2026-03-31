<h1>LUMINA: An Interactive Web Application Introducing Computer Engineering to SHS Graduates
Overview</h1>
This project is an interactive web-based learning platform designed for upcoming freshmen to explore basic computer engineering concepts through guided levels and rounds. Players progress through islands representing different topics, completing rounds such as multiple-choice quizzes, multiple-selection questionnaires, and interactive circuit-building exercises.
The platform emphasizes code cleanliness, modularity, and responsiveness, following the Single Responsibility Principle (SRP) for components and optimized CSS for multiple screen sizes.

<hr>
<h3>Features</h3>
Interactive Rounds: Multiple-choice, multiple-selection, and circuit-building rounds.
Level & Island System: Rounds are organized into levels; levels are grouped into islands for progressive learning.
Dynamic Progress Tracking: Player points and completed rounds are tracked and stored.
Draggable Circuit Components: In circuit rounds, users can drag components onto a breadboard, connect them, and complete circuits.
Feedback & Guidance: For circuit rounds, a correct placement guide appears if a player makes repeated mistakes.
Achievements System: Completion of rounds or islands triggers achievements stored in JSON data.
Mobile-Friendly & Responsive: Layout adapts across devices using modular CSS.

<hr>
<h3>Project Structure</h3>
root/
│
├─ assets/
│ ├─ images/ # Icons and images used in rounds and UI
│ ├─ svgs/ # Vector graphics
│ ├─ fonts/ # Custom fonts
│ └─ data/ # JSON data for rounds and achievements
│
├─ styles/ # Global and component CSS files
│ └─ (no nested directories)
│
└─ src/
├─ components/ # Reusable UI components (TextBox, TextButton, BreadboardComponent, etc.)
├─ core/ # LevelHandler, UserData, RoundData
├─ events/ # Event listeners and custom hooks
├─ hooks/ # React custom hooks
├─ levels/ # Level-specific JSX
├─ states/ # State management (Menu, Level)
└─ App.jsx # Root application entry point

<hr>
<h3>Installation</h3>
Clone the repository:
git clone https://github.com/yourusername/cpe-interactive.git
cd cpe-interactive
Install dependencies:
npm install
Run locally:
npm start
Open in browser:
Visit http://localhost:3000 to start interacting with the application.

<hr>
<h3>Usage</h3>
Menu Navigation: Players select islands from the menu. Each island unlocks progressively.
Rounds: Complete all rounds within a level before proceeding.
Circuit Rounds: Drag components (battery, LEDs, wires, buzzer, switch) onto the breadboard following guided steps. Correct placements increase points; repeated mistakes trigger hints.
Points & Achievements: Player points and unlocked achievements are stored in global_UserData and achievements.json.

<hr>
<h3>Customization</h3>
Adding Images: Place component icons in assets/images/circuitround/ and update paths in JSX.
Adding Rounds: Update ROUND_DATA JSON in src/core/RoundData.js.
Styling: Modify or extend CSS in styles/ using the naming convention:
component- → reusable components
menu- → components used in menu
level- → components inside level
round- → components inside round
Points & Achievements: Modify achievements.json in assets/data/.

<hr>
<h3>Code Conventions</h3>
File Names: PascalCase for components (QuestionnaireRound.jsx).
Variables: camelCase (roundData, levelHandler).
Functions: PascalCase (LevelHandler, TextButton).
CSS: \_ for spacing, - for classification (component-menu_button).

<hr>
<h3>Dependencies</h3>
React 18+
JavaScript (ES6+)
CSS3
Node.js / npm

<hr>
<h3>AI USED</h3>
Gemini: image generation

<hr>
<h3>Future Enhancements</h3>
Add drag-and-drop wire snapping in circuit rounds with visual connectors.
Implement timer-based challenges for rounds.
Expand achievement system with progressive badges for islands.
Add audio feedback for correct/incorrect answers in circuit rounds.

<hr>
Credits
Developed by:
Tomate, Lian Nielz P.
Santos, Rhanner Santino V.
Diaz, Dominic Jan V.
Awitan, Christopher John L.
Icons, assets, and JSON guides are custom-created for this project.
