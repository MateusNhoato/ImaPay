import React from 'react';
import Button from '../Button/Button'

import './Form.css'

const Form = ({children, buttonFunction, buttonValue, lowLinkValue, lowLinkRef}) => {
    return (
        <div>
            <div className='form-container'>
            <div className='form-gradient'></div>                
                    <form>
                        {children}
                        <Button onClick={buttonFunction}>{buttonValue}</Button>
                        <div>
                            
                        <a className='low-link' href={lowLinkRef}>{lowLinkValue}</a>
                        </div>
                    </form>
            </div>            
        </div>           
    );
}
 
export default Form;