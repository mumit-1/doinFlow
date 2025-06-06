import React, { useContext, useEffect, useState } from 'react';
import { AuthProvider } from './Provider';

const Test = () => {
//   const [listUser, setListUser] = useState([]);
  const { user } = useContext(AuthProvider);
  const token1 = "your-token-here";

  useEffect(() => {
    const token = user?.token || token1;
    if (!token) return;

    fetch("https://doingflow.vercel.app/api/events/ticket", {
      method: "GET",
      headers: {
        "Authorization": `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch users");
        return res.json();
      })
      .then(data => {
        // setListUser(data.users);
        console.log(data);
      })
      .catch(error => {
        console.error("Error fetching users:", error);
      });
  }, [user?.token]);
    return (
        <div>
            
        </div>
    );
};

export default Test;