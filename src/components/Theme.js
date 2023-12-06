import { useContext } from "react";
import { ChangeTheme } from "../App";

function ToggleTheme() {
    const changeTheme = useContext(ChangeTheme)
    return (
        <div className="topButton">
            <button className="kalvium">Kalvium</button>
            <h1 className="mainHeading">Quiz Game</h1>
            <button onClick={changeTheme} className="themeButton">Theme</button>
        </div>
    )

}

export default ToggleTheme