import React, {useState, createContext, useContext} from 'react';
import './index.css'
import ThemeContext, {useThemeContext} from "./ThemeContextProvider";



const DayNightToggle = () => {

    const {theme, setTheme} = useThemeContext()

    function changeTheme() {
        setTheme(!theme)
    }

    return (
        <div className={!theme ? "theme yellow" : "theme dark"} onClick={changeTheme}>
            <div className={!theme ? "arc le" : "arc ri"}></div>
            <div className={!theme ? "arc deux lee" : "arc deux rii"}></div>
            <div className={!theme ? "arc trois leee" : "arc trois riii"}></div>
            <div className={!theme ? "sun left" : "sun right hidden"}>
                <div className={!theme ? "moon hidde" : "moon"}></div>
            </div>

            <div className={!theme ? "stars hid one" : "stars one"}></div>
            <div className={!theme ? "stars hid two" : "stars two"}></div>
            <div className={!theme ? "stars hid three" : "stars three"}></div>
            <div className={!theme ? "stars hid four" : "stars four"}></div>
            <div className={!theme ? "cloud o" : "cloud o hidd"}></div>
            <div className={!theme ? "cloud t" : "cloud t hidd"}></div>
            <div className={!theme ? "cloud th" : "cloud th hidd"}></div>
            <div className={!theme ? "cloud f" : "cloud f hidd"}></div>
            <div className={!theme ? "cloud fi" : "cloud fi hidd"}></div>
        </div>
    );
};


export default DayNightToggle;