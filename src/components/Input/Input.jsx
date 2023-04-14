import {React, useState, useRef} from 'react';

import './Input.css'

const Input = ({children, type, isDate, maxlength, onChange, value, name, pattern}) => {
    const [transition, setTransition] = useState('');
    const textInput = useRef();

    const [defineType, setDefineType] = useState(type);

    const handleOnFocus = () => {
        setTransition('label-transition');
        isDate && setDefineType('date');
        const yyyyMmDd = new Date().toLocaleString('pt-BR').replace(/,.*/, '').split('/').reverse().join('-');  
        isDate && textInput.current.setAttribute('min', yyyyMmDd);
    }

    const handleOnBlur = () => {
        if(textInput.current.value === '') {
            setTransition('');
            isDate && setDefineType('text');
        }
    }

    return (
        <div>
            <input 
                value={value}
                ref= {textInput} 
                onFocus={handleOnFocus} 
                onBlur={handleOnBlur}
                onChange={onChange}
                className='form-data' 
                maxLength={maxlength} 
                type={defineType}
                name={name}
                required
            />
			
            <label className={transition}>{children}</label>
        </div>
      );
}
 
export default Input;