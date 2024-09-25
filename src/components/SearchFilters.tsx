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

  const clearFilters = () => {
    dispatch(setFilter({ name: "", username: "", email: "", phone: "" }));
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg space-y-4 max-w-lg mx-auto">
      <h2 className="text-xl font-semibold mb-4 text-pink-700">
        Search Filters
      </h2>
      <div className="flex flex-col space-y-2">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            name="name"
            placeholder="Search by name"
            value={filter.name}
            onChange={handleChange}
            className="flex-grow p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
          <input
            type="text"
            name="username"
            placeholder="Search by username"
            value={filter.username}
            onChange={handleChange}
            className="flex-grow p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
          <input
            type="text"
            name="email"
            placeholder="Search by email"
            value={filter.email}
            onChange={handleChange}
            className="flex-grow p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
          <input
            type="text"
            name="phone"
            placeholder="Search by phone"
            value={filter.phone}
            onChange={handleChange}
            className="flex-grow p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
          <button
            onClick={clearFilters}
            className="bg-primary-600 text-white p-2 rounded-md hover:bg-primary-700 transition duration-200"
          >
            Clear Filters
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchFilters;
