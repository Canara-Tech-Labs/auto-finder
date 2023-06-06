import { Button } from "antd";
import {  ArrowLeftOutlined, } from '@ant-design/icons';
import { Link } from "react-router-dom";
// import NavBar from "./Navigation";
import './Notification.css';


export default function NotificationSection(){
    return(
        <>
        {/* <NavBar/> */}
            <div className="Notification-Section">
            <div className="Notification-Section-Top-Layout">
            <Link to="/"><div className='Notification-Section-Top-Layout-Exit'>
                    <ArrowLeftOutlined style={{fontSize: '44px', color: '#ffffff'}}/>
                </div></Link>
                <div className='Notification-Section-Top-Layout-Subsection'>
                    <div className='Notification-Top-Layout-Subsection-Title'>
                        <h2>Notification</h2>
                    </div>
                </div>
            </div>
                <div className="Notification-Section-Body-Layout">
                    <div className="Notification-Section--Body-Date">
                        <span>25 May 2023</span>
                    </div>
                    <div className="Notification-Section-Notification-headings">
                        <Button className="Messages">Msg1</Button>
                        <Button className="Messages">Msg2</Button>
                        <Button className="Messages">Msg3</Button>
                        <Button className="Messages">Msg4</Button>
                    </div>

                    <div className="Notification-Section--Body-Date">
                        <span>24 May 2023</span>
                    </div>
                    <div className="Notification-Section-Notification-headings">
                        <Button className="Messages">Msg1</Button>
                        <Button className="Messages">Msg2</Button>
                        <Button className="Messages">Msg3</Button>
                        <Button className="Messages">Msg4</Button>
                    </div>
                    


                </div>
            </div>
        </>
    );
}