import React from 'react';
import { Route } from 'react-router-dom';
import ProfilePage from './Profilesection';
import SettingPage from './Settings';

const Routes = () => {
  return (
    <>
    <Routes>
      <Route exact path="./Profilesection" component={ProfilePage} />
      <Route exact path="./Settings.js'" component={SettingPage} />
      </Routes>
      {/* Add more routes for other pages */}
    </>
  );
};

export default Routes;
