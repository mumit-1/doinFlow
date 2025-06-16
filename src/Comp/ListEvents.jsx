import React, { useContext, useEffect, useState } from 'react';
import { AuthProvider } from './Provider';
import Loading from './Loading';
import { Link } from 'react-router-dom';

const ListEvents = () => {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true); // <-- Loading state
  const { user } = useContext(AuthProvider);
  const token1 = "your-token-here";

  useEffect(() => {
    const token = user?.token || token1;
    if (!token) return;

    setLoading(true); // Start loading

    fetch("https://doingflow.vercel.app/api/events", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        if (!res.ok) throw new Error("Failed to fetch events");
        return res.json();
      })
      .then(data => {
        setEvents(data.events || []);
      })
      .catch(error => {
        console.error("Error fetching events:", error);
      })
      .finally(() => setLoading(false)); // Stop loading
  }, [user?.token]);

  if (loading) {
    return (
      <Loading></Loading>
    );
  }
  console.log(events);
  return (
    <div className="overflow-x-auto h-screen">
      <h1 className="text-2xl font-semibold mb-4">Event List</h1>

      <div className="overflow-x-auto lg:w-full md:w-full custom-sm:w-[550px] custom-sm-a:w-96  w-[380px]  border-2 border-[#5C8374] rounded-xl">
        <table className="table table-xs table-pin-rows table-pin-cols">
          <thead className="bg-base-200">
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Description</th>
              <th>Date</th>
              <th>Ticketed</th>
              <th>Volunteers Needed</th>
              <th>Seat Count</th>
              <th>Price</th>
              <th>Type</th>
              <th>Created By</th>
              <th>View</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event, idx) => (
              <tr key={event._id || idx} className="hover:bg-base-200/60 transition-all duration-200 rounded-md">
                <th>{idx + 1}</th>
                <td>{event.title}</td>
                <td>{event.description}</td>
                <td>{new Date(event.eventTime).toLocaleString()}</td>
                <td>
                  <span className={`badge ${event.isTicketed ? 'badge-success' : 'badge-ghost'}`}>
                    {event.isTicketed ? 'Yes' : 'No'}
                  </span>
                </td>
                <td>
                  <span className={`badge ${event.needVolunteer ? 'badge-warning' : 'badge-ghost'}`}>
                    {event.needVolunteer ? 'Yes' : 'No'}
                  </span>
                </td>
                <td>{event.seatCount}</td>
                <td>{event.ticketPrice}</td>
                <td>
                  <span className={`badge ${event.type === 'public' ? 'badge-primary' : 'badge-secondary'}`}>
                    {event.type}
                  </span>
                </td>
                <td className="text-xs text-base-content/70">
                  {event.createdByType || 'N/A'}
                </td>
                <td>
                  <Link className='btn' to={`/events/${event._id} `}>View</Link>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot className="bg-base-200">
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Description</th>
              <th>Date</th>
              <th>Ticketed</th>
              <th>Volunteers Needed</th>
              <th>Seat Count</th>
              <th>Price</th>
              <th>Type</th>
              <th>Created By</th>
              <th>View</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default ListEvents;
