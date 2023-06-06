import React, { useState } from 'react';
import { Button, Avatar, Menu } from 'antd';
import {
  ArrowRightOutlined,
  MenuOutlined,
  UserOutlined,
  HomeOutlined,
  HistoryOutlined,
  BellOutlined,
  ReconciliationOutlined,
  SettingOutlined,
  PoweroffOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';

const { SubMenu } = Menu;

function getItem(label, key, icon, children, path) {
  return {
    key,
    icon,
    children,
    label,
    path,
  };
}

const items = [
  getItem('Close', '8', <ArrowRightOutlined/>),
  getItem('User1', 'UwU', (
    <Avatar style={{ backgroundColor: '#ffffff' }} icon={<UserOutlined />} />
  ), null, '/profilepage'),
  getItem('Home', '2', <HomeOutlined />, null, '/'),
  getItem('History', '3', <HistoryOutlined />, null, '/history'),
  getItem('Notifications', '4', <BellOutlined />, null, '/notification'),
  getItem('Privacy policy', '5', <ReconciliationOutlined />, null, '/provacypolicy'),
  getItem('Settings', '6', <SettingOutlined />, null, '/settings'),
  getItem('Logout', '7', <PoweroffOutlined />, null, '/'),
  
];

const SideMenu = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleCollapsed = () => {
    setShowMenu(!showMenu);
  };

  const handleMenuClick = () => {
    setShowMenu(false);
  };

  return (
    <div style={{ position: 'relative', zIndex: 1 }}>
      {/* <Button
        className="SideMenu-Hamburger-Button"
        type="text"
        onClick={toggleCollapsed}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 2,
          margin: '10px 0 0 -1px',
          border: '1px solid #e8e8e8',
          backgroundColor: 'transparent',
        }}
      >
        {showMenu && <MenuOutlined />}
      </Button> */}
      <Button
        className="SideMenu-Hamburger-Button"
        type="text"
        onClick={toggleCollapsed}
        style={{
          position: 'relative', // Changed position to relative
          zIndex: 2,
          margin: '10px 0 0 -1px',
          // border: '1px solid #e8e8e8',
          backgroundColor: 'transparent',
          padding: '5px', // Added padding to create space for the icon
        }}
      >
        <MenuOutlined
          style={{
            position: 'absolute', // Added position absolute
            top: '50%', // Adjusted vertical position to center the icon
            left: '50%', // Adjusted horizontal position to center the icon
            transform: 'translate(-50%, -50%)', // Center the icon precisely
            zIndex: 3, // Higher z-index for the icon to appear on top
            color: 'white'
          }}
        />
      </Button>

      {showMenu && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: -45,
            zIndex: 2,
            width: 166,
          }}
        >
          <Menu
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            theme="light"
            inlineCollapsed={false}
            
            onClick={handleMenuClick}
          >
            {items.map((item, index) => {
              if (index === 0) {
                return (
                  <Menu.Item key={item.key} icon={item.icon}>
                    <Link to={item.path}>{item.label}</Link>
                  </Menu.Item>
                );
              }
              return (
                <Menu.Item key={item.key} icon={item.icon}>
                  <Link to={item.path}>{item.label}</Link>
                </Menu.Item>
              );
            })}
          </Menu>
        </div>
      )}
    </div>
  );
};

export default SideMenu;
