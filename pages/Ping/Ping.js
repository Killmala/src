import React, { useState } from 'react';
import Navigation from './Navigation';
import UsersList from './UsersList';
import PingBox from './PingBox';
import './Ping.css';
const PingPage = () => {
  // 1. Define some “default” users, each with a status (current, new, archived, etc.)
  const defaultUsers = [
    { id: 1, name: "User 1", status: "new" },
    { id: 2, name: "User 2", status: "current" },
    { id: 3, name: "User 3", status: "archived" },
    { id: 4, name: "User 4", status: "current" },
    { id: 5, name: "User 5", status: "new" },
  ];

  // 2. React state to store current list of users & which filter is active
  const [users, setUsers] = useState(defaultUsers);
  const [filter, setFilter] = useState("all"); // can be "all", "current", "new", "archived"

  // 3. Handler to change the filter (invoked when user clicks New, Current, Archived)
  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  // 4. Handler to sort the user list by name (A-Z). 
  //    If you need more complex sorting, adapt this as you like.
  const handleSortUsers = () => {
    // Sort a *copy* of users so we don’t mutate the existing array
    const sorted = [...users].sort((a, b) => a.name.localeCompare(b.name));
    setUsers(sorted);
  };

  // 5. Handler to reset the user list to its default, unfiltered & unsorted state
  const handleResetUsers = () => {
    setUsers(defaultUsers);
    setFilter("all");
  };

  // 6. Filter the users based on the “filter” state
  //    If filter is “all,” show everything; otherwise show only matching status.
  const filteredUsers = users.filter((user) =>
    filter === "all" ? true : user.status === filter
  );

  return (
    <div className="ping-page-container">
      {/* 
        Pass down the handlers for filter, sort, and reset to Navigation 
        so the buttons can invoke them.
      */}
      <Navigation
        onFilterChange={handleFilterChange}
        onSortUsers={handleSortUsers}
        onResetUsers={handleResetUsers}
        activeFilter={filter}
      />

      {/* Pass the *filtered* users to UsersList */}
      <UsersList users={filteredUsers} />

      <PingBox />
    </div>
  );
};

export default PingPage;