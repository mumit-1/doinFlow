import React, { createContext, useState } from 'react';
export const AuthProvider = createContext(null);
const Provider = () => {
    const [user,setUser] = useState(null);
    const parcel = {
        user,
        setUser,
    }
    return (
        <AuthProvider.Provider value={parcel}>
            
        </AuthProvider.Provider>
    );
};

export default Provider;