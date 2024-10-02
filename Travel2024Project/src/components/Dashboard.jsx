// for authenticated users
import React from 'react';
import { useAuth } from '../context/AuthContext';
import Logout from './Auth/Logout';

const Dashboard = () => {
  const { currentUser } = useAuth();

  return (
    <div>
      <h1>Welcome, {currentUser.displayName || currentUser.email}!</h1>
      <Logout />
    </div>
  );
};

export default Dashboard;