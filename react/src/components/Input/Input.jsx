import {React, useState, useRef} from 'react';

import './Input.css'

const Input = ({children}) => {
    const [transition, setTransition] = useState('');
    const textInput = useRef();
    
    const handleOnFocus = () => {
        setTransition('label-transition');
    }

    const handleOnBlur = () => {
        console.log(textInput.current.value)
        if(textInput.current.value === '')
            setTransition('');
    }

    return (
        <div>    
            <input 
            ref= {textInput} 
            onFocus={handleOnFocus} 
            onBlur={handleOnBlur} 
            className='form-data' 
            type="text" required />
			
            <label className={transition}>{children}</label>
        </div>
      );
}
 
export default Input;