import { Button } from "antd";
import {  ArrowLeftOutlined, } from '@ant-design/icons';
import { Link } from "react-router-dom";
import './History.css';


export default function HistorySection(){
    return(
        <>
            <div className="History-Section">
            <div className="History-Section-Top-Layout">
            <Link to="/"><div className='History-Section-Top-Layout-Exit'>
                    <ArrowLeftOutlined style={{fontSize: '44px', color: '#ffffff'}}/>
                </div></Link>
                <div className='History-Section-Top-Layout-Subsection'>
                    <div className='History-Top-Layout-Subsection-Title'>
                        <h2>History</h2>
                    </div>
                </div>
            </div>
                <div className="History-Section-Body-Layout">
                    <div className="History-Section--Body-Date">
                        <span>25 May 2023</span>
                    </div>
                    <div className="History-Section-Notification-headings">
                    <Button className="Messages">
                            <div className="Messages-main-heading-time">
                                <p className="Messages-heading">New Message</p>
                            <p className="Messages-time">3:00 pm</p></div>
                            <p className="Messages-description">Your Journey Recap: Trip History Details Inside</p>
                        </Button>
                        <Button className="Messages">
                            <div className="Messages-main-heading-time">
                                <p className="Messages-heading">New Message</p>
                            <p className="Messages-time">3:00 pm</p></div>
                            <p className="Messages-description">Your Trip History: Explore Your Past Rides"</p>
                        </Button>
                        <Button className="Messages">
                            <div className="Messages-main-heading-time">
                                <p className="Messages-heading">New Message</p>
                            <p className="Messages-time">3:00 pm</p></div>
                            <p className="Messages-description">Recap: Review Your Recent Trips and Fares</p>

                        </Button>
                    </div>

                    <div className="History-Section--Body-Date">
                        <span>24 May 2023</span>
                    </div>
                    <div className="History-Section-Notification-headings">
                       <Button className="Messages">
                            <div className="Messages-main-heading-time">
                                <p className="Messages-heading">New Message</p>
                            <p className="Messages-time">3:00 pm</p></div>
                            <p className="Messages-description">Recap: Review Your Recent Trips and Fares</p>
                        </Button>
                        <Button className="Messages">
                            <div className="Messages-main-heading-time">
                                <p className="Messages-heading">New Message</p>
                            <p className="Messages-time">3:00 pm</p></div>
                            <p className="Messages-description">Your Journey Recap: Trip History Details Inside</p>
                        </Button>
                        <Button className="Messages">
                            <div className="Messages-main-heading-time">
                                <p className="Messages-heading">New Message</p>
                            <p className="Messages-time">3:00 pm</p></div>
                            <p className="Messages-description">Your Trip History: Explore Your Past Rides</p>
                        </Button>
                        <Button className="Messages">
                            <div className="Messages-main-heading-time">
                                <p className="Messages-heading">New Message</p>
                            <p className="Messages-time">3:00 pm</p></div>
                            <p className="Messages-description">Your Journey Recap: Trip History Details Inside</p>
                        </Button>
                        <Button className="Messages">
                            <div className="Messages-main-heading-time">
                                <p className="Messages-heading">New Message</p>
                            <p className="Messages-time">3:00 pm</p></div>
                            <p className="Messages-description">Your Trip History: Explore Your Past Rides</p>
                        </Button>
                    </div>
                    


                </div>
            </div>
        </>
    );
}