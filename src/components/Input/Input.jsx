import {React, useState, useRef} from 'react';

import './Input.css'

const Input = ({children}) => {
    const [transition, setTransition] = useState('');
    const [value, setValue] = useState('');
    const textInput = useRef();

    const handleOnFocus = () => {
        setTransition('label-transition');
    }

    const handleOnBlur = () => {
        if(textInput.current.value === '')
            setTransition('');
    }
    
    const handleChange = (event) => {
        setValue(event.target.value)
    }

    return (
        <div>
            <input 
            value={value}
            ref= {textInput} 
            onFocus={handleOnFocus} 
            onBlur={handleOnBlur}
            onChange={handleChange}
            className='form-data' 
            type="text" required />
			
            <label className={transition}>{children}</label>
        </div>
      );
}
 
export default Input;