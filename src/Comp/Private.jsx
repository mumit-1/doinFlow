import React, { useContext } from 'react';

const Private = ({children}) => {
    const {user} = useContext();
    if(user && user?.token){

    }
        
    return (
        <div>
            
        </div>
    );
};

export default Private;