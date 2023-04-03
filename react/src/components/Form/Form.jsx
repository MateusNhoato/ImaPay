import React from 'react';
import Button from '../Button/Button'

import './Form.css'

const Form = ({children, buttonFunction, buttonValue, lowLinkValue, lowLinkRef}) => {
    return (
            <div className='form-container'>
                    <form>
                        {children}
                        <Button onClick={buttonFunction}>{buttonValue}</Button>
                        <div>
                            
                        <a className='low-link' href={lowLinkRef}>{lowLinkValue}</a>
                        </div>

                    </form>
            </div>
            
    );
}
 
export default Form;