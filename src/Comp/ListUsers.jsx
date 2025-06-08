import React, { useContext, useEffect, useState } from 'react';
import { AuthProvider } from './Provider';
import Loading from './Loading';

const ListUsers = () => {
  const [listUser, setListUser] = useState([]);
  const [loading, setLoading] = useState(true); // <-- loading state
  const { user } = useContext(AuthProvider);
  const token1 = "your-token-here";

  useEffect(() => {
    const token = user?.token || token1;
    if (!token) return;

    setLoading(true); // start loading

    fetch("https://doingflow.vercel.app/api/admin/users", {
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
        setListUser(data.users || []);
      })
      .catch(error => {
        console.error("Error fetching users:", error);
      })
      .finally(() => setLoading(false)); // end loading
  }, [user?.token]);

  if (loading) {
    return (
     <Loading></Loading>
    );
  }

  return (
    <div className="overflow-x-auto h-screen">
      <h2 className="text-2xl font-semibold mb-4">User List</h2>
      <p className='text-sm opacity-70 mb-4 lg:w-3/5 md:w-4/5'>
        This page displays a list of all registered users, including their names, emails, roles, and contact information.
      </p>

      <div className="overflow-x-auto lg:w-full md:w-full custom-sm:w-[500px] custom-sm-a:w-96 w-[380px] border-2 border-[#5C8374] rounded-xl">
        <table className="table table-xs table-pin-rows table-pin-cols">
          <thead>
            <tr>
              <th className="w-10">#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Role</th>
            </tr>
          </thead>
          <tbody>
            {listUser.map((info, idx) => (
              <tr key={info._id || idx}>
                <th>{idx + 1}</th>
                <td className="font-medium">
                  {info.firstName} {info.lastName}
                </td>
                <td className="text-sm text-base-content/80">{info.email}</td>
                <td>{info.phone || 'N/A'}</td>
                <td>
                  <span className={`badge ${info.role === 'admin' ? 'badge-primary' : 'badge-ghost'}`}>
                    {info.role}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Role</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default ListUsers;
  