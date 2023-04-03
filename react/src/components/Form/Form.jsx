import React from 'react';
import Button from '../Button/Button'

import './Form.css'

const Form = ({children, buttonFunction, buttonValue, lowLinkValue, lowLinkRef}) => {
    return (
            <div className='form-container'>
<<<<<<< HEAD
                    <form>
                        {children}
                        <Button onClick={buttonFunction}>{buttonValue}</Button>
                        <div>
                            
                        <a className='low-link' href={lowLinkRef}>{lowLinkValue}</a>
                        </div>

                    </form>
            </div>
            
=======
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
>>>>>>> Desenvolvimento
    );
}
 
export default Form;