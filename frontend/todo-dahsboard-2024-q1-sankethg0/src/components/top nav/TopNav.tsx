import React from 'react';
import Bell from '../../assests/Bell-off.svg';
import Chevron from '../../assests/Chevron-down.svg';
import Ellipse from '../../assests/Ellipse 6.svg';
import '../../styles/topnav.css'

const TopNav = () => {
  return (
    <div className='top-bar'>
      <span>Dashboard</span>
      <div className='bell-icon'>
        <img src={Bell} alt="bell" />
      </div>
      <div className="dropdown">
        <div className='ellipse-icon'>
          <img src={Ellipse} alt="ellipse" />
        </div>
        <div className='chevron-icon'>
          <img src={Chevron} alt="chevron" />
        </div>
      </div>
    </div>
  );
}

export default TopNav;
