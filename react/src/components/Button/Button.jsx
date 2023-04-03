import React from 'react';

import './Button.css'

const Button = ({label, width, backgroundColor, click}) => {
    return ( 
        <>
            <button className="button" style={{width, backgroundColor}} onClick={click}>
                {label}
            </button>
        </>
    );
}
 
export default Button;