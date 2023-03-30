import React from 'react';
import Button from '../Button/Button'

import './Form.css'

const Form = ({children, buttonFunction, buttonValue}) => {
    return (
            <div className='form-container'>
                <form>
                    {children}
                    <Button onClick={buttonFunction}>{buttonValue}</Button>
                </form>
        </div>
    );
}
 
export default Form;