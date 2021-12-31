import React from 'react';

import './menu-item.styles.scss';
import { useLocation, useHistory, useRouteMatch } from "react-router-dom";

const MenuItem = ({ title, imageUrl, size }) => {
    const history = useHistory()
    const location = useLocation()
    const match = useRouteMatch()
    console.log(location)
    return (
        <div
            className={`${size} menu-item`}
            onClick={() => history.push(`${match.url}${title}`)}
        >
            <div
                className='background-image'
                style={{
                    backgroundImage: `url(${imageUrl})`
                }}
            />
            <div className='content'>
                <h1 className='title'>{title.toUpperCase()}</h1>
                <span className='subtitle'>SHOP NOW</span>
            </div>
        </div>
    );
}

export default MenuItem;