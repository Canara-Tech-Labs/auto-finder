import {  ArrowLeftOutlined, } from '@ant-design/icons';
import { Button } from 'antd';
import { Link } from 'react-router-dom';
import './Settings.css';



export default function SettingPage(){
    return(
        <>
        <div className="Settings-Section">
            <div className="Settings-Section-Top-Layout">
                <Link to="/"><div className='Settings-Section-Top-Layout-Exit'>
                    <ArrowLeftOutlined style={{fontSize: '44px', color: '#ffffff'}}/>
                </div></Link>
                <div className='Settings-Section-Top-Layout-Subsection'>
                    <div className='Top-Layout-Subsection-Title'>
                        <h2> Settings</h2>
                    </div>
                </div>
            </div>
            <div className='Settings-Section-Body-Layout'>
                <div className='Setting-Section-Option-Lists'>
                <Link to="/profilepage"><Button className='Option-Buttons'>
                            <ul className='Option-Buttons-Heading'>Profile</ul>
                            <ul>somethingstupid@gmail.com</ul>
                        </Button></Link>
                        <Link to='/settings/preferences'> <Button className='Option-Buttons'>
                            <ul className='Option-Buttons-Heading'>Preferences</ul>
                        </Button></Link>
                        <Link to="/settings/"><Button className='Option-Buttons'>
                            <ul className='Option-Buttons-Heading'>Language</ul>
                            
                        </Button></Link>
                        <Link to="/settings"> <Button className='Option-Buttons'>
                            <ul className='Option-Buttons-Heading'>Privacy Policy</ul>
                        </Button></Link>
                        <Link to="/settings/terms-and-conditions"><Button className='Option-Buttons'>
                            <ul className='Option-Buttons-Heading'>Terms and Conditions</ul>
                        </Button></Link>
                        <Link to="/settings/about-us"><Button className='Option-Buttons'>
                            <ul className='Option-Buttons-Heading'>About Us </ul>
                        </Button></Link>
                        <Link to="/settings/contact-us"><Button className='Option-Buttons'>
                            <ul className='Option-Buttons-Heading'>Contact Us</ul>
                        </Button></Link>
                        <Link to="/"><Button className='Option-Buttons'>
                            <ul className='Option-Buttons-Heading'>Log Out</ul>
                        </Button></Link>
                </div>
            </div>


        
        </div>
        </>
    );
}