// MessageDetail.jsx

import React from 'react';
import '../Detailed Pages/CSS/DriveArrival.css'; // Import the CSS file
import { Link } from 'react-router-dom';
import { ArrowLeftOutlined, } from '@ant-design/icons';


const MessageDetail = ({ message }) => {
    return (
        <>
            <Link to="/">
                <div className='Notification-Section-Top-Layout-Exit'>
                    <ArrowLeftOutlined style={{ fontSize: '44px', color: '#ffffff' }} />
                </div>
            </Link>
            <div className="container">
                <h2 className="heading">Message Detail</h2>
                <div className="details">
                    <p>Sender: </p>{/* {message.sender}{message.timestamp}{message.content} */}
                    <p>Timestamp: </p>
                </div>
                <p className="content">Content: </p>
                <p className="content">information to be added</p>
            </div>
        </>
    );
};

export default MessageDetail;
