import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchUsers } from "./features/usersSlice";
import UserTable from "./components/UserTable";
import SearchFilters from "./components/SearchFilters";
import { AppDispatch } from "./store";
const App: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  return (
    <div>
      <h1>User Management</h1>
      <SearchFilters />
      <UserTable />
    </div>
  );
};

export default App;
