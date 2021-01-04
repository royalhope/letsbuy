import { Avatar, Icon } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-router-dom';
import './SidebarRow.css';

function SidebarRow({ src, Icon, title, link }) {
    return (
        <Link className="sidebarRow__navigation" to={link}>
            <div className="sidebarRow">
                {src && <Avatar src={src} />}
                {Icon && <Icon />}
                    <h4>{title}</h4>
            </div>
        </Link>
    )
}

export default SidebarRow