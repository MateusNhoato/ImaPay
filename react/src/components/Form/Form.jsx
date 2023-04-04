import React from 'react';
import Button from '../Button/Button'

import './Form.css'

const Form = ({title, children, buttonFunction, buttonValue, lowLinkValue, lowLinkRef, buttonWidth}) => {
    const BTN_HOVER_COLOR = '#28a4a4';
    const BTN_COLOR = 'var(--secondary-color)';

    return (
            <div className='form-container'>
                <div className='form-gradient'></div>
                 <h2 className='form-container-h2'>{title}</h2>
                    <form>
                        {children}
                        <Button 
                            onClick={buttonFunction}
                            label={buttonValue}
                            width={buttonWidth}
                            backgroundColor={BTN_COLOR}
                            hoverColor={BTN_HOVER_COLOR}
                            leaveColor={BTN_COLOR}
                        />
                        <div>
                             
                        <a className='low-link' href={lowLinkRef}>{lowLinkValue}</a>
                        </div>
                    </form>
            </div>
    );
}
 
export default Form;