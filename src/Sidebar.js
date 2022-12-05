import { Avatar, dividerClasses } from '@mui/material'
import React from 'react'
import "./Sidebar.css"

function Sidebar() {

    const recentItem = (topic) => (
        <div className="sidebar__recentItem">
            <span className = "sidebar__hash">#</span>
            <p>{topic}</p>
        </div> 
    )
  return (
    <div className = "sidebar">
       <div className="sidebar__top">
           <img src="https://images.unsplash.com/photo-1652928341750-7cfc55c56526?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070" alt=""/>
           <Avatar className = "sidebar__avatar"/>
           <h2>Erik Li</h2>
           <h4>jinghul2@bu.edu</h4>

       </div>

       <div className="sidebar__stats">
           <div className = "sidebar__stat">
                <p>Who viewed you</p>
                <p className = "sidebar__statNumber">2,543</p>
           </div>
           <div className="sidebar__stat">
             <p>Views on post</p>
             <p className = "sidebar__statNumber">2,448</p>
           </div>
        </div>
       <div className = "sidebar__bottom">
           <p>Recent</p>
           {recentItem('reactjs')}
           {recentItem('programming')}
           {recentItem('softwareengineering')}
           {recentItem('UI/UXdesign')}
           {recentItem('developer')}

        </div>
    </div>
  );
}
    
export default Sidebar;