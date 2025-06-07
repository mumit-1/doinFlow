import React, { useContext, useEffect, useState } from 'react';
import { AuthProvider } from './Provider';

const eventApproval = () => {
  const [stats, setStats] = useState(null);
  const { user } = useContext(AuthProvider);
  const fallbackToken = "your-token-here";

  useEffect(() => {
    const token = user?.token || fallbackToken;
    if (!token) return;

    fetch("https://doingflow.vercel.app/api/admin/analytics", {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(data => {
        setStats(data);
        console.log("Stats fetched:", data);
      })
      .catch(err => console.error("Error fetching stats:", err));
  }, [user?.token]);

  if (!stats) return <div className="p-4 h-screen">Loading stats...</div>;

  const {
    activeEvents,
    completedEvents,
    totalEvents,
    totalParticipants,
    totalUsers,
    totalVolunteers,
    pendingCommunities,
    pendingEvents
  } = stats;

  const boxes = [
    { label: 'Total Events', value: totalEvents },
    { label: 'Active Events', value: activeEvents },
    { label: 'Completed Events', value: completedEvents },
    { label: 'Total Participants', value: totalParticipants },
    { label: 'Total Users', value: totalUsers },
    { label: 'Total Volunteers', value: totalVolunteers },
  ];

  return (
    <div className='h-screen'>
      <h2 className="text-2xl font-semibold mb-2">Analytics</h2>
      <p className='text-sm opacity-70 mb-4 lg:w-3/5 md:w-4/5'>
        Quick summary of total events, participants, users, and volunteers for admin insights.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {boxes.map((box, idx) => (
          <div
            key={idx}
            className="bg-[#183D3D] text-white p-6 rounded-xl shadow-md hover:shadow-xl transition-all"
          >
            <p className="text-3xl font-bold mt-2">{box.value}</p>
            <h3 className="text-lg font-medium">{box.label}</h3>
          </div>
        ))}
      </div>

      {(pendingCommunities?.length > 0 || pendingEvents?.length > 0) && (
        <div className="mt-10">
          <h3 className="text-xl font-semibold mb-2">Pending Approvals</h3>
          <p className="text-sm opacity-70 mb-4">
            These communities and events are waiting for admin review.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {pendingCommunities?.length > 0 && (
              <div className="bg-[#5C8374] text-white p-6 rounded-xl shadow-md">
                <h4 className="text-lg font-semibold mb-2">Pending Communities</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  {pendingCommunities.map((community, idx) => (
                    <li key={idx}>{community.name || `Community ${idx + 1}`}</li>
                  ))}
                </ul>
              </div>
            )}

            {pendingEvents?.length > 0 && (
              <div className="bg-[#5C8374] text-white p-6 rounded-xl shadow-md">
                <h4 className="text-lg font-semibold mb-2">Pending Events</h4>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  {pendingEvents.map((event, idx) => (
                    <li key={idx}>{event.name || `Event ${idx + 1}`}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default eventApproval;
