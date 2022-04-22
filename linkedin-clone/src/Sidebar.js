import { Avatar } from '@material-ui/core'
import React from 'react'

import './Sidebar.css';

function Sidebar() {

    const recentItem = (topic) => (
        < div className="sidebar__recentItem" >
            <span className="sidebar__hash">#</span>
            <p>{topic}</p>
        </div >
    )


    return (
        <div className="sidebar">
            <div className="sidebar__top">
                <img src="https://i.ibb.co/0FZn3Np/1612467201609.jpg" alt="" />
                <Avatar className="sidebar__avatar" />
                <h2>Prajna Prabhu</h2>
                <h4>prajnapprabhu@gmail.com</h4>
            </div>

            <div className="sidebar__stats">
                <div className="sidebar__stat">
                    <p>Who viewed you</p>
                    <p className="sidebar__statNumber">2000</p>
                </div>

                <div className="sidebar__stat">
                    <p>Connections</p>
                    <p className="sidebar__statNumber">488</p>
                </div>


            </div>

            <div className="sidebar__bottom">
                <p>Recent</p>
                {recentItem('reactjs')}
                {recentItem('programming')}
                {recentItem('web3')}
                {recentItem('blockchain')}
                {recentItem('DataScience')}
            </div>
        </div>
    )
}

export default Sidebar