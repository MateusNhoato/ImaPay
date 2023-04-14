import React from 'react';
import { useNavigate } from 'react-router';

import Button from '../Button/Button'



import './Form.css'

const Form = ({title, children, buttonFunction, buttonValue, lowLinkValue, lowLinkRef, buttonWidth, hoverColor='#28a4a4', gradient=false, isEnable}) => {
    const BTN_COLOR = 'var(--secondary-color)';
    const GRADIENT_CLASS = gradient ? "form-gradient" : "form-no-gradient";	
    const FORM_CLASS = gradient ? "form-container" : "form-container-transfer";
    const navigate = useNavigate();

    return (
        <>
            <div className={GRADIENT_CLASS}></div>
            <div className={FORM_CLASS}>
                <h2>{title}</h2>
                <form>
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
                        <a className='low-link' onClick={() => navigate(`${lowLinkRef}`)}>{lowLinkValue}</a>
                    </div>
                </form>
            </div>
        </>
    );
}
 
export default Form;