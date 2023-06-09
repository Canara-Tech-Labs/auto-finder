import { UserOutlined, ArrowLeftOutlined } from '@ant-design/icons';
import { Avatar , Button } from 'antd';
import Modals from './Modaltest';
import ModalMail from './ModalMail';
import ModalNumber from './ModalNumber';
import CalenderFunction from './ModalCalender';
import { Link } from 'react-router-dom';
import './Profilesection.css';
import './logo.svg';



export default function ProfilePage(){
    return(
        <>
        <div className="Profile-Section">
            <div className="Profile-Section-Top-Layout">
            <Link to="/"><div className='Profile-Section-Top-Layout-Exit'>
                    <a href="./logo.svg"><ArrowLeftOutlined style={{fontSize: '44px', color: '#ffffff'}}/></a>
                </div></Link>
                <div className='Profile-Section-Top-Layout-Subsection'>
                    <div className='Top-Layout-Subsection-UserName'>
                        <h2> Radha</h2>
                    </div>
                    <div className='Top-Layout-Subsection-UserImage'>
                        <Avatar size="large" icon={<UserOutlined style={{fontSize: '44px', color: '#ffffff'}}/>} />
                    </div> 
                </div>
            </div>
            <div className='Profile-Section-Body-Layout'>
                <div className='Profile-Section-Option-Lists'>
                    
                        {/* <Button className='Option-Buttons'>
                            <ul className='Option-Buttons-Heading'>Email</ul>
                            <ul>somethingstupid@gmail.com</ul>
                        </Button> */}<ModalMail/>
                      {/* <Button className='Option-Buttons'>
                            <ul className='Option-Buttons-Heading'>Phone number</ul>
                            <ul>+91 94838492832</ul>
                        </Button> */}<ModalNumber/>
                        <Modals/>
                      {/* <Button className='Option-Buttons'>
                            <ul className='Option-Buttons-Heading'>Gender</ul>
                            <ul>Female</ul>
                        </Button> */}
                     {/* <Button className='Option-Buttons'>
                            <ul className='Option-Buttons-Heading'>Dob</ul>
                            <ul>12 May 2004</ul>
                        </Button> */}<CalenderFunction/>
                    
                    <div className="Profile-Section-Option-Lists-Subsection">
                        <ul>Emergency Contact</ul>
                        <div className='Emergency-Contact'>
                            <div className='Emergency-Contact-1'><ul>Contact 1</ul>
                            <ul>36828493848</ul></div>

                            <div className='Emergency-Contact-2'><ul>Contact 2</ul>
                            <ul>23447487587</ul></div>
                        </div>
                    </div>
                    
                </div>
                <div className="Profile-Section-Option-Lists-Footersection">
                        <span><ul>Members Since </ul>1st May 2023</span>
                        
                        
                    </div>
            </div>


        
        </div>
        </>
    );
}