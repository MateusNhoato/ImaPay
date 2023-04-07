import React from 'react';
import Button from '../Button/Button'

import './Form.css'

const Form = ({title, children, buttonFunction, buttonValue, lowLinkValue, lowLinkRef, buttonWidth, hoverColor='#28a4a4', gradient=false}) => {
    const BTN_COLOR = 'var(--secondary-color)';
    const GRADIENT_CLASS = gradient ? "form-gradient" : "form-no-gradient";	
    const FORM_CLASS = gradient ? "form-container" : "form-container-transfer";

    return (
            <div className={FORM_CLASS}>
                <div className={GRADIENT_CLASS}></div>
                 <h2 className='form-container-h2'>{title}</h2>
                    <form>
                        {children}
                        <div style={{display: "flex", "justify-content": "center"}}>
                            <Button
                                onClick={buttonFunction}
                                label={buttonValue}
                                width={buttonWidth}
                                backgroundColor={BTN_COLOR}
                                hoverColor={hoverColor}
                                leaveColor={BTN_COLOR}
                            />
                        </div>
                        <div>
                             
                        <a className='low-link' href={lowLinkRef}>{lowLinkValue}</a>
                        </div>
                    </form>
            </div>
    );
}
 
export default Form;