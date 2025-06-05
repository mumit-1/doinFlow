import React, { useContext, useEffect, useState } from 'react';
import { AuthProvider } from './Provider';

const ListUsers = () => {
  const [listUser,setListUser] = useState([]);
  const {user} = useContext(AuthProvider);
  const token1 = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2ODQwOTJjMzE1MTdmMGEyNzc4YzQ5NjkiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE3NDkxMTg5MTEsImV4cCI6MTc0OTcyMzcxMX0.H9az9HtuwSUdsJw-Bfn7_T8h9b85Qv0MUC0q91pFuBc";
  useEffect(()=>{
    console.log(user?.token || token1);
    fetch("https://doingflow.vercel.app/api/admin/users", {
  method: "GET",
  headers: {
    "Authorization": `Bearer ${user?.token || token1}`,
    "Content-Type": "application/json"
  }
})
    .then(res=>res.json())
    .then(data=>console.log(data))
  },[])
    return (
        <div>
          <button>OK</button>
        </div>
    );
};

export default ListUsers;