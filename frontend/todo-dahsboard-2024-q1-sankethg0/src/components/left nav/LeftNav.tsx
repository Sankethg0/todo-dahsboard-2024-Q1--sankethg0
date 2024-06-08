import React from 'react'
import Icon from '../../assests/Icon.png'
import '../../styles/leftnav.css'

const LeftNav = () => {
    return (
      <div className='nav'>
        <div className='nav-header'>
          Acmy Solutions
        </div>
        <div className='nav-search'>
          <img src={Icon} alt='icon' />
          <span>Dashboard</span>
        </div>
      </div>
    );
  }

export default LeftNav