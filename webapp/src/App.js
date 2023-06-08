import * as React from "react";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Layout from "./layouts/AppLayout";
import Login from "./pages/publicPages/LoginComponents/Loginexample"
import NotificationSection from "./pages/protectedPages/HomePage/Notification";
import NotificationDetailedPage from "./pages/protectedPages/HomePage/Detailed Pages/NotificationDetails";
import IndividualHistoryPage from './pages/protectedPages/HomePage/Detailed Pages/HistoryDetails'
import HistorySection from "./pages/protectedPages/HomePage/History";
import MessageDetail from "./pages/protectedPages/HomePage/Detailed Pages/DriveArrival";

//Notification subpages
import PaymentConfirmationNotification from "./pages/protectedPages/HomePage/Detailed Pages/PaymentConfirmation";
import RideCancellationNotification from "./pages/protectedPages/HomePage/Detailed Pages/RideCancellation";
import RideConfirmationNotification from "./pages/protectedPages/HomePage/Detailed Pages/RideConfirmation";
import RideStatusUpdateNotification from "./pages/protectedPages/HomePage/Detailed Pages/RideStatusUpdate";

export default function App() {
 
  return (
    <div>
      <Routes>
       <Route path="/" element={<Layout />}>
          <Route index element={<NotificationSection />} />
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="/notification/msg1" element={<NotificationDetailedPage/>}/>
          <Route path="/history/msg1" element={<IndividualHistoryPage/>}/>
          <Route path="history" element={<HistorySection/>}/>
          <Route path="/drivearrival-message" element={<MessageDetail/>}/>


          {/* Pages inside the Notification Pages */}
          <Route path="/notification/payment-confirmation" element={<PaymentConfirmationNotification/>}/>
          <Route path="/notification/ride-cancellation" element={<RideCancellationNotification/>}/>
          <Route path="/notification/ride-confirmation" element={<RideConfirmationNotification/>}/>
          <Route path="/notification/ride-status-update" element={<RideStatusUpdateNotification/>}/>


          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  );
}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );
}

function About() {
  return (
    <div>
      <h2>About</h2>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
    </div>
  );
}

function NoMatch() {
  return (
    <div>
      <h2>Nothing to see here!</h2>
      <p>
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}
