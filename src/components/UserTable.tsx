import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const UserTable: React.FC = () => {
  const { users, filter } = useSelector((state: RootState) => state.users);

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(filter.name.toLowerCase()) &&
      user.username.toLowerCase().includes(filter.username.toLowerCase()) &&
      user.email.toLowerCase().includes(filter.email.toLowerCase()) &&
      user.phone.toLowerCase().includes(filter.phone.toLowerCase())
  );

  return (
    <div className="p-6 bg-gradient-to-br from-pink-300 via-pink-400 to-pink-500 rounded-xl shadow-lg overflow-x-auto">
      <table className="min-w-full table-auto bg-white rounded-lg shadow-md">
        <thead>
          <tr className="bg-pink-200">
            <th className="px-6 py-3 text-left text-sm font-semibold text-pink-700">
              Name
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-pink-700">
              Username
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-pink-700">
              Email
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold text-pink-700">
              Phone
            </th>
          </tr>
        </thead>
        <tbody>
          {filteredUsers.length ? (
            filteredUsers.map((user) => (
              <tr
                key={user.id}
                className="hover:bg-pink-100 transition duration-300 ease-in-out border-b border-pink-200"
              >
                <td className="px-6 py-4 text-pink-900">{user.name}</td>
                <td className="px-6 py-4 text-pink-900">{user.username}</td>
                <td className="px-6 py-4 text-pink-900">{user.email}</td>
                <td className="px-6 py-4 text-pink-900">{user.phone}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan={4} className="px-6 py-4 text-center text-pink-900">
                No users found
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
