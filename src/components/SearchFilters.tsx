import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilter } from "../features/usersSlice";
import { RootState } from "../store";

const SearchFilters: React.FC = () => {
  const dispatch = useDispatch();
  const { filter } = useSelector((state: RootState) => state.users);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(setFilter({ [e.target.name]: e.target.value }));
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        placeholder="Search by name"
        value={filter.name}
        onChange={handleChange}
      />
      <input
        type="text"
        name="username"
        placeholder="Search by username"
        value={filter.username}
        onChange={handleChange}
      />
      <input
        type="text"
        name="email"
        placeholder="Search by email"
        value={filter.email}
        onChange={handleChange}
      />
      <input
        type="text"
        name="phone"
        placeholder="Search by phone"
        value={filter.phone}
        onChange={handleChange}
      />
    </div>
  );
};

export default SearchFilters;
