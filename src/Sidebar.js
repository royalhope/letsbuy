import React from 'react';
import SidebarRow from './SidebarRow';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import HomeIcon from '@material-ui/icons/Home';
import TvIcon from '@material-ui/icons/Tv';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import ToysIcon from '@material-ui/icons/Toys';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import CreateIcon from '@material-ui/icons/Create';
import PetsIcon from '@material-ui/icons/Pets';
import KitchenIcon from '@material-ui/icons/Kitchen';
import './Sidebar.css';

function Sidebar() {

    return (
        <div className="sidebar">
            <SidebarRow link="/" Icon={HomeIcon} title='Home' />
            <SidebarRow Icon={ExpandMoreIcon} title='Products' />
            <SidebarRow link="/tech" Icon={TvIcon} title="Tech" />
            <SidebarRow link="/fitness" Icon={FitnessCenterIcon} title="Stay Fit" />
            <SidebarRow link="/toys" Icon={ToysIcon} title="Toys" />
            <SidebarRow link="/books" Icon={BookmarkIcon} title="Books" />
            <SidebarRow link="/stationery" Icon={CreateIcon} title="Stationery" />
            <SidebarRow link="/dogs" Icon={PetsIcon} title="Dog Food" />
            <SidebarRow link="/electronics" Icon={KitchenIcon} title="Electronics" />
        </div>
    )
}

export default Sidebar