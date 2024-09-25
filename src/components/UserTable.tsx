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
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Username</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {filteredUsers.map((user) => (
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.username}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default UserTable;
