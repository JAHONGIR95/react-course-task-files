import React from 'react'
import {Link} from 'react-router-dom'

import {
    Home,
    Trending,
    Subscriptions,
    Library,
    History,
    WatchLater,
    Favourites,
    LikedVideos,
    Music,
    Games,
    ShowMore
} from '../../components/SidebarIcons/SidebarIcons';
import SidebarBtn from '../../components/SidebarBtn/SidebarBtn';

import './Sidebar.scss';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="icons">
                <Link to="/">
                    <SidebarBtn title="Home" icon={<Home />}/>
                </Link>
                <Link to="/trending">
                    <SidebarBtn title="Trending" icon={<Trending />}/>
                </Link>
                <Link  to="/watchLater">
                    <SidebarBtn title="Subscriptions" icon={<Subscriptions />}/>
                </Link>
                <SidebarBtn title="Library" icon={<Library />}/>
                <SidebarBtn title="History" icon={<History />}/>
                <SidebarBtn title="Watch later" icon={<WatchLater />}/>
                <SidebarBtn title="Favourites" icon={<Favourites />}/>
                <SidebarBtn title="Liked videos" icon={<LikedVideos />}/>
                <SidebarBtn title="Music" icon={<Music />}/>
                <SidebarBtn title="Games" icon={<Games />}/>
                <SidebarBtn title="Show more" icon={<ShowMore />}/>
            </div>
            <h1>Sidebar</h1>
        </div>
    )
}

export default Sidebar
