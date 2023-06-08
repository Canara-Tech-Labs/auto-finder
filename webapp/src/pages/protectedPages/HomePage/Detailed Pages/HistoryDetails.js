// IndividualHistoryPage.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeftOutlined, } from '@ant-design/icons';
// import { useParams } from 'react-router-dom'; // Assuming you're using React Router for routing

const IndividualHistoryPage = ({ historyItems }) => {
  // const { itemId } = useParams();

  // const historyItem = historyItems.find((item) => item.id === itemId);

  // if (!historyItem) {
  //   return <div>Item not found.</div>;
  // }

  return (
    <div>
       <Link to="/">
            <div className='Notification-Section-Top-Layout-Exit'>
                <ArrowLeftOutlined style={{ fontSize: '44px', color: '#ffffff' }} />
            </div>
        </Link>
      <header>
        {/* Header content */}
      </header>

      <h1>Ride Details</h1>

      <div>
        <h2>Ride Information</h2>
        <div>Pickup Location: </div>{/* {historyItem.pickupLocation} */}
        <div>Destination: </div>{/* {historyItem.destination} */}
         <div>Date: </div>{/*{historyItem.date} */}
        <div>Time: </div>{/* {historyItem.time} */}
        {/* Other ride details */}
      </div>

      <div>
        <h2>Status and Actions</h2>
         <div>Status: </div>{/*{historyItem.status} */}
        <button>Rebook</button>
        <button>Leave Feedback</button>
        {/* Other relevant actions */}
      </div>

      <div>
        <h2>Messaging History</h2>
        <ul>
          {/* {historyItem.messages.map((message) => (
            <li key={message.id}>
              <div>Sender: {message.sender}</div>
              <div>Timestamp: {message.timestamp}</div>
              <div>Message: {message.content}</div>
            </li>
          ))} */}
        </ul>
      </div>

      <footer>
        {/* Footer content */}
      </footer>
    </div>
  );
};

export default IndividualHistoryPage;
