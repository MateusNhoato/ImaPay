import React from 'react';
import Button from '../Button/Button'

import './Form.css'

const Form = ({hundleSubmit,title, children, buttonFunction, buttonValue, lowLinkValue, lowLinkRef, buttonWidth, hoverColor='#28a4a4', gradient=false, isEnable}) => {
    const BTN_COLOR = 'var(--secondary-color)';
    const GRADIENT_CLASS = gradient ? "form-gradient" : "form-no-gradient";	
    const FORM_CLASS = gradient ? "form-container" : "form-container-transfer";

    return (
        <>
            <div className={GRADIENT_CLASS}></div>
                <div className={FORM_CLASS}>
                     <h2>{title}</h2>
                        <form onSubmit={hundleSubmit}> 
                            {children}
                            <div style={{display: "flex", "justifyContent": "center"}}>
                                <Button
                                label={buttonValue}
                                width={buttonWidth}
                                backgroundColor={BTN_COLOR}
                                click={buttonFunction}
                                hoverColor={hoverColor}
                                leaveColor={BTN_COLOR}
                                isEnable={isEnable}
                            />
                            </div>

                        <div>                             
                        <a className='low-link' href={lowLinkRef}>{lowLinkValue}</a>
                        </div>
                        
                        </form>
                </div>
        </>
    );
}
 
export default Form;