import { createContext, useContext, useState } from "react";

const ThemContext = createContext();

export const ThemProvider = ({children})=>{
    const [darkMode,setDarkMode] = useState(false);

    return (
        <ThemContext.Provider value={{darkMode,setDarkMode}}>
            {children}
        </ThemContext.Provider>
    ) 
}

export const useThemContent = () => {
    return useContext(ThemContext)
}