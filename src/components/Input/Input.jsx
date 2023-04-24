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

    const showHidePass = event => {
        if(event.target.getAttribute('data-visibility') == 'hidden') {
            event.target.dataset.visibility = '';
            event.target.src = '\\src\\assets\\img\\password-image-lock.svg';
            setDefineType('text');
        } else {
            event.target.dataset.visibility = 'hidden';
            event.target.src = '\\src\\assets\\img\\password-image.svg';
            setDefineType('password');
        }
    }

    return (
        <div className='input-container'>
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

            {
                ['password', 'password-confirm'].includes(name) && <img data-visibility='hidden' onClick={showHidePass} className='password-img' src='' />
            }

			
            <label className={transition}>{children}</label>
        </div>
      );
}
 
export default Input;