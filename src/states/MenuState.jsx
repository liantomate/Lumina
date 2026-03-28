import "../../styles/MenuState.css";

import NavigationBar from "../components/NavigationBar";
import SideBar from "../components/SideBar";

export default function MenuState()
{
    // CODE HERE
    return (<>
        <div className="component-background">

        </div>
        <SideBar className="freeze" />
        <NavigationBar className="freeze" logoPath={"../../assets/images/logo.png"} title={"Lumina"} progress={20}/>
    </>);
}