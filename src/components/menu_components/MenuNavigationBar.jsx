import "../../../styles/Component_MenuNavigationBar.css";
import ProgressBar from "../ProgressBar";

export default function NavigationBar({ logoPath, title, progress }) {
  return (
    <div className="component-navigation_bar">
      <img src={logoPath} alt="Logo" className="nav-logo" />
      <h1 className="nav-title">{title}</h1>
      <ProgressBar value={progress} />
    </div>
  );
}