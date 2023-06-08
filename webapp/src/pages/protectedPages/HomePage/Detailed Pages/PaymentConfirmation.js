// PaymentConfirmationNotification.jsx

import React from 'react';
import { ArrowLeftOutlined, } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const PaymentConfirmationNotification = ({ notification }) => {
  return (
    <div>
         <Link to="/">
            <div className='Notification-Section-Top-Layout-Exit'>
                <ArrowLeftOutlined style={{ fontSize: '44px', color: '#ffffff' }} />
            </div>
        </Link>
      <h2>Payment Confirmation</h2>
      <p>Payment successful.</p>
      <p>Amount: {notification.amount}</p>
      <p>Payment Method: {notification.paymentMethod}</p>
      <p>Transaction ID: {notification.transactionId}</p>
    </div>
  );
};

export default PaymentConfirmationNotification;
