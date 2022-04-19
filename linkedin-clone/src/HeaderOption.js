import React from 'react';
import './HeaderOption.css';
import { Avatar } from '@material-ui/core';

function HeaderOption({ avatar, Icon, title }) {
    return (
        <div className="headerOption">
            {/* renders only if we pass a icon when this component is being used  */}
            {Icon && <Icon className="headeroption__icon" />}
            {avatar &&
                <Avatar className='headerOption__icon' src={avatar} />
            }

            <h3 className="headerOption__title">{title}</h3>

        </div>
    )
}

export default HeaderOption;