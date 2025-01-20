import React from 'react';

const UsersList = () => {
  // You can accept props here for dynamic user data
  // e.g., (props) => props.users.map(...)
  return (
    <div className="users-list-ping">
      <ul>
        <li>User 1</li>
        <li>User 2</li>
        <li>User 3</li>
      </ul>
    </div>
  );
};

export default UsersList;
