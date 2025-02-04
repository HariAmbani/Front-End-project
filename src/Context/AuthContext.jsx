import { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(true);

    const login = () => {
        
        setIsLoggedIn(true);
    }
    
    const logout = () => {
        setIsLoggedIn(false);
    }

    return(
        <AuthContext.Provider value={{isLoggedIn,login,logout}}>
            {children}
        </AuthContext.Provider>
    )
}