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
import './SideMenu.css';

const { SubMenu } = Menu;

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [ 
    getItem('Close', '8', <ArrowRightOutlined/>),
  getItem('User1', 'UwU', (
    <Avatar style={{ backgroundColor: '#ffffff' }} icon={<UserOutlined />} />
  )),
  getItem('Home', '2', <HomeOutlined />),
  getItem('History', '3', <HistoryOutlined />),
  getItem('Notifications', '4', <BellOutlined />),
  getItem('Privacy policy', '5', <ReconciliationOutlined />),
  getItem('Settings', '6', <SettingOutlined />),
  getItem('Logout', '7', <PoweroffOutlined />),
  
];

const SideMenu = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(false);

  const toggleCollapsed = () => {
    setShowMenu(!showMenu);
  };

  const handleMenuClick = (e) => {
    if (e.key === '8') {
      setShowMenu(false);
    }
  };

  return (
    <div style={{ position: 'relative', zIndex: 1 }}>
      <Button
        className="SideMenu-Hamburger-Button"
        type="text"
        onClick={toggleCollapsed}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          zIndex: 2,
          margin: '10px 0 0 -1px',
          borderLeft: '1px solid #e8e8e8',
          backgroundColor: '#000000',
          color: '#ffffff'
        }}
      >
        {showMenu && <MenuOutlined style={{ color: '#ffffff' , border: '#f5f5f5'}}/> } 
      </Button>
      {showMenu && (
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 3,
            width: 256,
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
                    {item.label}
                  </Menu.Item>
                );
              }
              return (
                <Menu.Item key={item.key} icon={item.icon}>
                  {item.label}
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
