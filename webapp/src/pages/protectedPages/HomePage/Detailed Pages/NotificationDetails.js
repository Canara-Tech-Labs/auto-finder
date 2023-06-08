// import { Link } from "react-router-dom";
// import { ArrowLeftOutlined } from '@ant-design/icons';

// export default function NotificationDetailedPage(notification) {
//     return (
//         <>
//             <div className="Main">
//                 <div className="Notification-Message-Section-Top-Layout">
//                     <Link to="/"><div className='Notification-Message-Section-Top-Layout-Exit'>
//                         <ArrowLeftOutlined style={{ fontSize: '44px', color: '#ffffff' }} />
//                     </div></Link>
//                     <div className='Notification-Message-Section-Top-Layout-Subsection'>
//                         <div className='Notification-Message-Top-Layout-Subsection-Title'>
//                             <h2>Notification</h2>
//                         </div>
//                     </div>
//                 </div>
//                 <div className="">
//                     <div className="notification-content">
//                         {/* Notification content */}
//                         <h2>{notification.title}</h2>
//                         <p>{notification.message}</p>
//                         {/* Other relevant data */}
//                     </div>

//                     <div className="action-buttons">
//                         {/* Action buttons */}
//                         <button>View Details</button>
//                         <button>Reply</button>
//                         {/* Other action buttons */}
//                     </div>

//                     <div className="additional-info">
//                         {/* Additional information */}
//                         {/* Display any additional details or context */}
//                     </div>

//                     <div className="related-content">
//                         {/* Related content or suggestions */}
//                         {/* Display related content or recommendations */}
//                     </div>

//                     <footer>
//                         {/* Footer content */}
//                         {/* Additional links or actions */}
//                     </footer>
//                 </div>

//             </div>

//         </>
//     );
// }

// NotificationPage.jsx

import React, { useState } from 'react';
// import './NotificationPage.css'; // Import the CSS file for styling

const NotificationDetailedPage = ({ notification }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  return (
    <div className="notification-page">
      <header>
        {/* Header content */}
      </header>

      <div className="notification-content">
        {/* Notification content */}
        {/* <h2>{notification.title}</h2>
        <p>{notification.message}</p> */}
        {/* Other relevant data */}
      </div>

      <div className="action-buttons">
        {/* Action buttons */}
        <button onClick={toggleDetails}>View Details</button>
        <button>Reply</button>
        {/* Other action buttons */}
      </div>

      {showDetails && (
        <div className="additional-info">
          {/* Additional information */}
          {/* Display any additional details or context */}
        </div>
      )}

      <div className="related-content">
        {/* Related content or suggestions */}
        {/* Display related content or recommendations */}
      </div>

      <footer>
        {/* Footer content */}
        {/* Additional links or actions */}
      </footer>
    </div>
  );
};

export default NotificationDetailedPage;
