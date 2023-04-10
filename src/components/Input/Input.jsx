import {React, useState, useRef} from 'react';

import './Input.css'

const Input = ({children, inputFunction}) => {
    const [transition, setTransition] = useState('');
    const textInput = useRef();

    const handleOnFocus = () => {
        setTransition('label-transition');
    }

    const handleOnBlur = () => {
        if(textInput.current.value === '')
            setTransition('');
    }
    
    const handleChange = (event) => {
        inputFunction(event.target.value)
    }

    return (
        <div>
            <input 
            ref= {textInput} 
            onFocus={handleOnFocus} 
            onBlur={handleOnBlur}
            onChange={handleChange}
            className='form-data' 
            type="text" />
			
            <label className={transition}>{children}</label>
        </div>
      );
}
 
export default Input;