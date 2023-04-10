import React from 'react';

import './TopTitle.css';

const TopTitle = (props) => {
    return (
        <div className="up-div-container">
            <div className="title" style={props.styleTitle}>
                {props.title}
            </div>
            <div className="subtitle" style={props.styleSubtitle}>
                {props.subtitle}
            </div>
        </div>
    )
}

export default TopTitle;