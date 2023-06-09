// RideStatusUpdateNotification.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftOutlined, } from '@ant-design/icons';

const RideStatusUpdateNotification = ({ notification }) => {
  return (
    <div>
        <Link to="/">
            <div className='Notification-Section-Top-Layout-Exit'>
                <ArrowLeftOutlined style={{ fontSize: '44px', color: '#ffffff' }} />
            </div>
        </Link>
      <h2>Ride Status Update</h2>
      <p>Current Status: {notification.status}</p>
      {/* Display any additional relevant information */}
    </div>
  );
};

export default RideStatusUpdateNotification;
