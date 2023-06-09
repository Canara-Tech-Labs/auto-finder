// RideCancellationNotification.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftOutlined, } from '@ant-design/icons';

const RideCancellationNotification = ({ notification }) => {
  return (
    <div>
        <Link to="/">
            <div className='Notification-Section-Top-Layout-Exit'>
                <ArrowLeftOutlined style={{ fontSize: '44px', color: '#ffffff' }} />
            </div>
        </Link>
      <h2>Ride Cancellation</h2>
      <p>Your ride has been canceled.</p>
      <p>Reason: {notification.cancellationReason}</p>
      {/* Display options for rebooking or contacting support */}
    </div>
  );
};

export default RideCancellationNotification;
