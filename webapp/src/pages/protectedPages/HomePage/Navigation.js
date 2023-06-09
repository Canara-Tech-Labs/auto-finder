import "./Navigation.css" ;
import  { Col, Row, Space, Avatar} from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { Button } from "antd/es/radio";
import { Link } from "react-router-dom";
import SideMenu from './SideMenu1';
// import ProfileComponent from './Dashboard';
import { Dropdown} from 'antd';
const items = [
  {
    label: <a style={{ fontFamily: 'Roboto', color: '#363d3f' }}>< Link to="/">Add Account</Link></a>,
    key: '0',
  },{
    type: 'divider',
  },
  {
    label: <a style={{ fontFamily: 'Roboto', color: 'black' }}> <Link to="/">Log Out</Link></a>,
    key: '1',
  }
];

export function ProfileComponent(){
    return(
    

            <div className="Profile pic-button">
                <Dropdown
                    menu={{
                    items,
                    }}
                    trigger={['click']}
                    placement="bottom"
                    
                >
                    <a onClick={(e) => e.preventDefault()}>
        
                        <Space direction="vertical" size={16}>
                            <Button className="Profile-Button"
                             style={{
                                borderLeft: 'none', // Remove the border-left property
                                backgroundColor: 'transparent'}}
                            ><Avatar size="large" icon={<UserOutlined />} /></Button>
                        </Space>
                    </a>
                </Dropdown>
            </div>
           
            
            
    );

}


export default function NavBar(){
    return(
        <>
            <div className="Navigation">
                    <Row>
            <Col className="Navigtion-side-menu" span={8}><SideMenu/></Col></Row>
            <Row>
            <Col className="Navigation-profile-button" span={8} offset={8}>
                <ProfileComponent/>
            </Col>
            </Row>
            
            </div>
        </>
    );
}



