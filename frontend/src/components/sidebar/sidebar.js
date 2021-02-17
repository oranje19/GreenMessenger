import { Avatar, IconButton } from '@material-ui/core';
import { Chat, DonutLarge, ExpandMore, SearchOutlined } from '@material-ui/icons';
import React from 'react';
import "./sidebar.css";
import SidebarChat from './sidebarChat';

function Sidebar() {
    return (
        <div className='sidebar'>
            <div className="sidebar__header">
                <Avatar src="https://media-exp1.licdn.com/dms/image/C5603AQHq0XoSmVfZGg/profile-displayphoto-shrink_800_800/0/1592124686442?e=1619049600&v=beta&t=PldstQefEmQSYBPymB8kB3A8rvs0MOCvGBQaRYYJsZo" />
                <div className="sidebar__headerRight">
                    <IconButton>
                        <DonutLarge />
                    </IconButton>
                    <IconButton>
                        <Chat />
                    </IconButton>
                    <IconButton>
                        <ExpandMore />
                    </IconButton>
                </div>
            </div>

            <div className="sidebar__search">
                <div className="sidebar__searchContainer">
                    <SearchOutlined />
                    <input
                        placeholder="Search or start new chat"
                        type="text"
                    />
                </div>
            </div>

            <div className="sidebar__chats">
                <SidebarChat />
                <SidebarChat />
                <SidebarChat />
            </div>
        </div>
    )
}

export default Sidebar
