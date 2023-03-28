import React, {useState, useEffect, createContext} from 'react'

export const AuthContext = createContext()

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(false)
    , [user, setUser] = useState({})
    , [datas, setDatas] = useState(false) 


    return (
        <AuthContext.Provider value={{ token, setToken, user, setUser, datas, setDatas }}>
            {children}
        </AuthContext.Provider>
    )
}
