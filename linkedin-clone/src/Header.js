import React from 'react';
import SearchIcon from '@material-ui/icons/Search';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { FaLinkedin } from 'react-icons/fa';
import HeaderOption from './HeaderOption';
import HomeIcon from '@material-ui/icons/Home';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import ChatIcon from '@material-ui/icons/Chat';
import NotificationsIcon from '@material-ui/icons/Notifications';


import './Header.css';

function Header() {
    return (
        <div className="header">

            {/* left-part fo the header  */}
            <div className="header__left">
                <FaLinkedin className='linkedin' />

                <div className="header__search">
                    <SearchIcon />
                    <input type="text" />
                </div>
            </div>
            {/* left-part of the header ends  */}

            {/* right-part of the header  */}
            <div className="header__right">
                <HeaderOption Icon={HomeIcon} title="Home" />
                <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
                <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
                <HeaderOption Icon={ChatIcon} title="Messaging" />
                <HeaderOption Icon={NotificationsIcon} title="Notifications" />
                <HeaderOption avatar="https://i.ibb.co/KmjYzfn/avatar.jpg" title="Me" />
            </div>
            {/* right-part of the header ends */}
        </div>

    )
}

export default Header