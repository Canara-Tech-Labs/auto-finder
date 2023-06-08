import { Button } from "antd";
import { ArrowLeftOutlined, } from '@ant-design/icons';
import { Link } from "react-router-dom";
// import NavBar from "./Navigation";
import './Notification.css';




export default function NotificationSection() {
    return (
        <>
            {/* <NavBar/> */}
            <div className="Notification-Section">
                <div className="Notification-Section-Top-Layout">
                    <Link to="/"><div className='Notification-Section-Top-Layout-Exit'>
                        <ArrowLeftOutlined style={{ fontSize: '44px', color: '#ffffff' }} />
                    </div></Link>
                    <div className='Notification-Section-Top-Layout-Subsection'>
                        <div className='Notification-Top-Layout-Subsection-Title'>
                            <h2>Notification</h2>
                        </div>
                    </div>
                </div>
                <div className="Notification-Section-Body-Layout">
                    <div className="Notification-Section-Body-Date">
                        <span>25 May 2023</span>
                    </div>
                    <div className="Notification-Section-Notification-headings">
                        <Link to ="/notification/ride-status-update"><Button className="Messages">
                            <div className="Messages-main-heading-time">
                                <p className="Messages-heading">New Message</p>
                            <p className="Messages-time">4:00 pm</p></div>
                            <p className="Messages-description">Latest Update: Your Driver is On the Way</p>
                        </Button></Link>
                        <Link to="/history/msg1"><Button className="Messages">
                            <div className="Messages-main-heading-time">
                                <p className="Messages-heading">New Message</p>
                            <p className="Messages-time">3:00 pm</p></div>
                            <p className="Messages-description">Your Ride is Booked: Get Ready to Go!</p>
                        </Button></Link>
                        <Link to="/notification/"><Button className="Messages">
                            <div className="Messages-main-heading-time">
                                <p className="Messages-heading">New Message</p>
                            <p className="Messages-time">12:00 pm</p></div>
                            <p className="Messages-description">We Care About Your Opinion: Provide Us with Feedback</p>
                        </Button></Link>
                        <Link to="/notification/ride-cancellation"><Button className="Messages">
                            <div className="Messages-main-heading-time">
                                <p className="Messages-heading">New Message</p>
                            <p className="Messages-time">10:00 am</p></div>
                            <p className="Messages-description">Ride Update: Your Trip Has Been Canceled</p>
                        </Button></Link>
                    </div>

                    <div className="Notification-Section--Body-Date">
                        <span>24 May 2023</span>
                    </div>
                    <div className="Notification-Section-Notification-headings">
                    <Link to="/notification/"><Button className="Messages">
                            <div className="Messages-main-heading-time">
                                <p className="Messages-heading">New Message</p>
                            <p className="Messages-time">3:00 pm</p></div>
                            <p className="Messages-description">Your Opinion Matters: We Value Your Feedback</p>
                        </Button></Link>
                        <Link to="/notification/ride-confirmation"><Button className="Messages">
                            <div className="Messages-main-heading-time">
                                <p className="Messages-heading">New Message</p>
                            <p className="Messages-time">3:00 pm</p></div>
                            <p className="Messages-description">Great News! Your Ride Has Been Confirmed</p>
                        </Button></Link>
                        <Link to="/notification/ride-confirmation"><Button className="Messages">
                            <div className="Messages-main-heading-time">
                                <p className="Messages-heading">New Message</p>
                            <p className="Messages-time">3:00 pm</p></div>
                            <p className="Messages-description">Great News! Your Ride Has Been Confirmed</p>
                        </Button></Link>
                        <Link to="/notification/ride-cancellation"><Button className="Messages">
                            <div className="Messages-main-heading-time">
                                <p className="Messages-heading">New Message</p>
                            <p className="Messages-time">3:00 pm</p></div>
                            <p className="Messages-description">Apologies for the Inconvenience: Ride Canceled</p>
                        </Button></Link>
                    </div>



                </div>
            </div>
        </>
    );
}