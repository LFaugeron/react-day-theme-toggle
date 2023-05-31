import React from 'react';
import './index.css'
import {useThemeContext} from "./ThemeContextProvider";
import dune from "./assets/dune.png"
import cactus from "./assets/cactus.png"



const DayNightToggle = ({style = "classic"}) => {

    const {theme, setTheme} = useThemeContext()

    function changeTheme() {
        setTheme(!theme)
    }

    if(style === "classic") {
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
                <div className={!theme ? "stars hid five" : "stars five"}></div>
                <div className={!theme ? "cloud o" : "cloud o hidd"}></div>
                <div className={!theme ? "cloud t" : "cloud t hidd"}></div>
                <div className={!theme ? "cloud th" : "cloud th hidd"}></div>
                <div className={!theme ? "cloud f" : "cloud f hidd"}></div>
                <div className={!theme ? "cloud fi" : "cloud fi hidd"}></div>
            </div>
        );
    } else if(style === "desert") {
        return (
            <div className={!theme ? "theme desert" : "theme desertdark"} onClick={changeTheme}>
                <img src={dune} alt="dune" className={!theme ? "img" : "img deserthid"}/>
                <img src={dune} alt="dune" className={!theme ? "imgdark desertdarkhid" : "imgdark"}/>
                <img src={cactus} alt="cactus" className={!theme ? "cactus" : "cactus deserthidde"}/>
                <img src={cactus} alt="cactus" className={!theme ? "cactus second" : "cactus second deserthidden"}/>
                <img src={cactus} alt="cactus" className={!theme ? "cactusdark desertdarkhidden" : "cactusdark"}/>
                <img src={cactus} alt="cactus" className={!theme ? "cactusdark sec desertdarkhidde" : "cactusdark sec"}/>
                <div className={!theme ? "arc le" : "arc ri"}></div>
                <div className={!theme ? "arc deux lee" : "arc deux rii"}></div>
                <div className={!theme ? "arc trois leee" : "arc trois riii"}></div>
                <div className={!theme ? "desertsun left" : "desertsun right hidden"}>
                    <div className={!theme ? "moondesert hidde" : "moondesert"}></div>
                </div>

                <div className={!theme ? "stars hid one" : "stars one"}></div>
                <div className={!theme ? "stars hid two" : "stars two"}></div>
                <div className={!theme ? "stars hid three" : "stars three"}></div>
                <div className={!theme ? "stars hid four" : "stars four"}></div>
                <div className={!theme ? "stars hid five" : "stars five"}></div>
            </div>
        )
    } else {
        return null
    }
};


export default DayNightToggle;