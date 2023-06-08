// RideConfirmationNotification.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftOutlined, } from '@ant-design/icons';

const RideConfirmationNotification = ({ notification }) => {
  return (
    <div>
        <Link to="/">
            <div className='Notification-Section-Top-Layout-Exit'>
                <ArrowLeftOutlined style={{ fontSize: '44px', color: '#ffffff' }} />
            </div>
        </Link>
      <h2>Ride Confirmation</h2>
      <p>Your ride request has been accepted!</p>
      <p>Driver: {notification.driverName}</p>
      <p>Estimated Time of Arrival: {notification.eta}</p>
      <p>Vehicle: {notification.vehicleInfo}</p>
    </div>
  );
};

export default RideConfirmationNotification;
