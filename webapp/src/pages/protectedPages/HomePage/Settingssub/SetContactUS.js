import { Link } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";
import './SettingSub.css';

export default function SettingsContacttUs(){
    return(
        <>
        <div className="Preferences-Header">
            
            <Link to="/settings"><div className='Preferences-Section-Top-Layout-Exit'>
                <ArrowLeftOutlined style={{fontSize: '44px', color: '#ffffff'}}/>
            </div></Link>
            <div className='Preferences-Section-Top-Layout-Subsection'>
                <div className='Top-Layout-Subsection-Title'>
                    <h2> Contact Us</h2>
                </div>
            </div>
        

        </div>
        <div>
            <span>This page is about the company </span>
            <span>Information to be added yet</span></div></>
    );
}