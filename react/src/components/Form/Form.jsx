import React from 'react';
import Button from '../Button/Button'

import './Form.css'

const Form = ({children, buttonFunction, buttonValue}) => {
    return (
            <div className='form-container'>
                <form>
                    {children}
                    <Button
                        label={buttonValue}
                        click={buttonFunction}
                        width={'-webkit-fill-available'}
                        backgroundColor={''}
                    />
                </form>
        </div>
    );
}
 
export default Form;