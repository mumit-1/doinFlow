import React, { createContext, useState } from 'react';
export const AuthProvider = createContext(null);
const Provider = ({children}) => {
    const [user,setUser] = useState({});
    const [id,setID] = useState("");
    const parcel = {
        user,
        setUser,
        setID,
        id,
    }
    return (
        <AuthProvider.Provider value={parcel}>
            {children}
        </AuthProvider.Provider>
    );
};

export default Provider;