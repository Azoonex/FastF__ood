import { createContext, useContext, useState } from "react";

const ThemContext = createContext();

export const ThemProvider = ({ children }: React.ReactNode)=>{
    const [darkMode,setDarkMode] = useState(false);
    const [addShop,setAddShop] = useState(1)

    return (
        <ThemContext.Provider value={{darkMode,setDarkMode,addShop,setAddShop}}>
            {children}
        </ThemContext.Provider>
    ) 
}

export const useThemContent = () => {
    return useContext(ThemContext)
}