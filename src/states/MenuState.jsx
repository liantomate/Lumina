import "../../styles/MenuState.css";

import NavigationBar from "../components/NavigationBar";
import SideBar from "../components/SideBar";

export default function MenuState()
{
    // CODE HERE
    return (<>
        <div className="component-background">
            {/* <img src="../../assets/images/bg_cloud.png"></img> */}
        </div>
        {/* <div className="component-islands">
            <img src="../../assets/images/island_01.png"></img>
        </div> */}
        <SideBar className="freeze" />
        <NavigationBar className="freeze" logoPath={"../../assets/images/logo.png"} title={"Lumina"} progress={20}/>
    </>);
}