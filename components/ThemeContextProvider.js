import {createContext, useContext, useState} from "react";

const ThemeContext = createContext()

export const ThemeContextProvider = ({children}) => {

    const [theme, setTheme] = useState(false)



    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

export const useThemeContext = () => {
    const {theme, setTheme} = useContext(ThemeContext)

    return {theme, setTheme}
}

export default ThemeContext