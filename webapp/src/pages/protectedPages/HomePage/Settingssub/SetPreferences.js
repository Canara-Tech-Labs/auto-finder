import { Switch } from 'antd';
import { Link } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons";
import './SettingSub.css';

const onChange = (checked) => {
  console.log(`switch to ${checked}`);
};

export default function SetPreferences(){
    return(
        <>
        <div className="Preferences-Main-Layout">
            <div className="Preferences-Header">
            <div className="Settings-Section-Top-Layout">
                <Link to="/settings"><div className='Settings-Section-Top-Layout-Exit'>
                    <ArrowLeftOutlined style={{fontSize: '44px', color: '#ffffff'}}/>
                </div></Link>
                <div className='Settings-Section-Top-Layout-Subsection'>
                    <div className='Top-Layout-Subsection-Title'>
                        <h2> Preferences</h2>
                    </div>
                </div>
            </div>

            </div>

            <div className="Preferences-Sub-Section-1-Push-Notifications">
                <span className="email-section-heading">Push Notifications</span>
                {/* the enable notifaction button shound be added here.. */}
                <span className='email-section-description'>Some info</span>
                <div><Switch defaultChecked onChange={onChange} /></div>
            </div>
            <div className="Preferences-Sub-Section-2-Email">
                <span className="email-section-heading">Email</span>
                {/* the enable notifaction button shound be added here.. */}
                <span className='email-section-description'>Some info</span>
                <div><Switch defaultChecked onChange={onChange} /></div>
            </div>
            <div className="Preferences-Sub-Section-3-SMS&whtsapp">
                <span className="email-section-heading">SMS & Whatsapp</span>
                {/* the enable notifaction button shound be added here.. */}
                <span className='email-section-description'>Some info</span>
                <div><Switch defaultChecked onChange={onChange} /></div>
            </div>

        </div>
        </>
    );
}