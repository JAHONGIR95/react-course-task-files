import React from 'react'
import {NavLink} from 'react-router-dom'

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
import BurgerBtn from '../../components/BurgerBtn/BurgerBtn';

import './Sidebar.scss';

function Sidebar() {
    return (
        <div className="sidebar">
            <BurgerBtn />
            <div className="icons">
                <NavLink exact to="/" activeClassName="selected">
                    <SidebarBtn title="Home" icon={<Home />}/>
                </NavLink>
                <NavLink to="/trending" activeClassName="selected">
                    <SidebarBtn title="Trending" icon={<Trending />}/>
                </NavLink>
                <NavLink  to="/watchLater" activeClassName="selected">
                    <SidebarBtn title="Subscriptions" icon={<Subscriptions />}/>
                </NavLink>
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
