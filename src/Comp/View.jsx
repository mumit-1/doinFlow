import { useContext, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthProvider } from './Provider';
import React from 'react';

const View = () => {
    const {user,id} = useContext(AuthProvider);
    useEffect(() => {
    const token = user?.token || fallbackToken;
    if (!token) return;

    fetch(`https://doingflow.vercel.app/api/events/volunteer-requests?eventId=${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => {
        // setStats(data);
        console.log("Stats fetched 1:", data);
      })
      .catch(err => console.error("Error fetching stats:", err));
  }, [user?.token]);
    useEffect(() => {
    const token = user?.token || fallbackToken;
    if (!token) return;

    fetch(`https://doingflow.vercel.app/api/events/accepted-volunteers?eventId=${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => {
        // setStats(data);
        console.log("Stats fetched 2 :", data);
      })
      .catch(err => console.error("Error fetching stats:", err));
  }, [user?.token]);
    useEffect(() => {
    const token = user?.token || fallbackToken;
    if (!token) return;

    fetch(`https://doingflow.vercel.app/api/events/purchased-tickets?eventId=${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => {
        // setStats(data);
        console.log("Stats fetched 3:", data);
      })
      .catch(err => console.error("Error fetching stats:", err));
  }, [user?.token]);
    useEffect(() => {
    const token = user?.token || fallbackToken;
    if (!token) return;

    fetch(`https://doingflow.vercel.app/api/events/participated-users?eventId=${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => {
        // setStats(data);
        console.log("Stats fetched 4:", data);
      })
      .catch(err => console.error("Error fetching stats:", err));
  }, [user?.token]);
    useEffect(() => {
    const token = user?.token || fallbackToken;
    if (!token) return;

    fetch(`https://doingflow.vercel.app/api/events/assigned-tasks?eventId=${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => {
        // setStats(data);
        console.log("Stats fetched 5 :", data);
      })
      .catch(err => console.error("Error fetching stats:", err));
  }, [user?.token]);
    useEffect(() => {
    const token = user?.token || fallbackToken;
    if (!token) return;

    fetch(`https://doingflow.vercel.app/api/events/details?eventId=${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => {
        // setStats(data);
        console.log("Stats fetched 6:", data);
      })
      .catch(err => console.error("Error fetching stats:", err));
  }, [user?.token]);
    useEffect(() => {
    const token = user?.token || fallbackToken;
    if (!token) return;

    fetch(`https://doingflow.vercel.app/api/events/payments?eventId=${id}`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => {
        // setStats(data);
        console.log("Stats fetched 7:", data);
      })
      .catch(err => console.error("Error fetching stats:", err));
  }, [user?.token]);
    return (
        <div>
            ok {id}
        </div>
    );
};

export default View;