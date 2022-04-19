import { Avatar } from '@material-ui/core'
import React from 'react'

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="" alt="" />
                <Avatar className="sidebar__avatar" />
                <h2>Prajna Prabhu</h2>
                <h4>prajnapprabhu@gmail.com</h4>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed your profile</p>
                    <p className="sidebar__statNumber">2000</p>
                </div>

                <div className="sidebar__stat">
                    <p>Connections</p>
                    <p className="sidebar__statNumber">488</p>
                </div>
            </div>
        </div>
    )
}

export default Sidebar