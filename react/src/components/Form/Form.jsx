import React from 'react';
import Button from '../Button/Button'

import './Form.css'

const Form = ({children, buttonColor, buttonFunction, buttonValue, lowLinkValue, lowLinkRef}) => {
    return (
            <div className='form-container'>
                    <form>
                        {children}
                        <Button key="1" label={buttonValue} backgroundColor={buttonColor} click={(buttonFunction) => {alert('1')}} width={"100%"} ></Button>
                        <div>   
                            <a className='low-link' href={lowLinkRef}>{lowLinkValue}</a>
                        </div>
                    </form>
            </div>
    );
}
 
export default Form;