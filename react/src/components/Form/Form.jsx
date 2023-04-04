import React from 'react';
import Button from '../Button/Button'

import './Form.css'

const Form = ({title, children, buttonFunction, buttonValue, lowLinkValue, lowLinkRef, buttonWidth}) => {
    return (
            <div className='form-container'>
                 <h2 className='form-container-h2'>{title}</h2>
                    <form>
                        {children}
                        <Button 
                            onClick={buttonFunction}
                            label={buttonValue}
                            width={buttonWidth}
                        />
                        <div>
                             
                        <a className='low-link' href={lowLinkRef}>{lowLinkValue}</a>
                        </div>
                    </form>
            </div>
    );
}
 
export default Form;