import React from 'react';

import './Button.css'

const Button = ({label, width, backgroundColor, click, hoverColor, leaveColor}) => {
    const hover = event => {
        event.target.style.backgroundColor = hoverColor;
    }

    const leave = event => {
        event.target.style.backgroundColor = leaveColor;
    }

    return ( 
        <>
            <button 
                className="button"
                style={{width, backgroundColor}} 
                onClick={click}
                onMouseEnter={hover}
                onMouseLeave={leave}
            >
                {label}
            </button>
        </>
    );
}
 
export default Button;