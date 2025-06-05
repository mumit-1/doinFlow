import React, { useContext, useEffect, useState } from 'react';
import { AuthProvider } from './Provider';

const ListUsers = () => {
  const [listUser, setListUser] = useState([]);
  const { user } = useContext(AuthProvider);
  const token1 = "your-token-here";

  useEffect(() => {
    const token = user?.token || token1;
    if (!token) return;

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
        setListUser(data.users);
        console.log(data.users);
      })
      .catch(error => {
        console.error("Error fetching users:", error);
      });
  }, [user?.token]);

  return (
    <div className="overflow-x-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">User List</h2>

<div className="overflow-x-auto lg:w-full md:w-full w-80 mx-auto">
  <table className="table table-xs table-pin-rows table-pin-cols">
    <thead className="bg-base-200">
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
        <tr key={info._id || idx} className="hover:bg-base-200/50">
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
    <tfoot className="bg-base-200">
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
