import React, { useState, useRef } from 'react';

import Form from "../../components/Form/Form";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import NavBar from "../../components/NavBar/NavBar";
import { useNavigate } from "react-router-dom";
import './styles.css';

const Register = () => {
    document.title = 'Ímã Pay - Cadastre-se';

    const navigate = useNavigate() 
    const items = [<Button
        label={'Login'}
        width={''}
        backgroundColor={'var(--primary-color)'}
        click={() => navigate('/login')}
        hoverColor={'var(--secondary-color)'}
        leaveColor={'var(--primary-color)'}
    />];

    const [isChecked, setIsChecked] = useState(false);
    const bgRef = useRef(null);
    const termsBoxRef = useRef(null);
    const termsRef = useRef(null);
    const checkboxRef = useRef(null);
    const errorAlert = useRef();

    const [cpfNumber, setCpfNumber] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleButtonClick = () => {
        setIsChecked(false);
        bgRef.current.classList.remove('hidden');
        termsBoxRef.current.classList.add('zoom-in');
        termsRef.current.scrollTo(0, 0);
    }

    const handleBackgroundClick = (event) => {
        if (event.target.className === 'transparency-bg') {
            bgRef.current.classList.add('hidden');
            termsBoxRef.current.classList.remove('zoom-in');
        }
    }

    const handleCheckboxContainerClick = () => {
        const termsBox = termsRef.current;
        const isAtTheEnd = Math.ceil(termsBox.scrollTop + termsBox.offsetHeight) >= termsBox.scrollHeight;

        const _name = document.querySelector('input[name="name"]').value;
        const _cpf = document.querySelector('input[name="cpf"]').value;
        const _phone = document.querySelector('input[name="phone"]').value;
        const _email = document.querySelector('input[name="email"]').value;
        const _address = document.querySelector('input[name="address"]').value;
        const _password = document.querySelector('input[name="password"]').value;

        if (isAtTheEnd) {
            setIsChecked(!isChecked);

            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(
                    {
                        "userName": _name,
                        "cpf": _cpf,
                        "telephone": _phone,
                        "email": _email,
                        "password": _password,
                        "address": _address
                    }
                )
            };
            fetch('https://imapayapi-production.up.railway.app/swagger/Register', requestOptions)
                .then(response => console.log(response))
                .then(data => {
                    const registered = data.registered || true;
                    
                    if(registered) {
                        const sucessMsn = document.querySelector('.registration-success-message');
                        sucessMsn.classList.remove('popup-hidden');
                        setTimeout(() => {
                            navigate('/login');          
                        }, 1500);
                    }
                }).catch(e => {
                    console.log(e);
                });
        }
    }

    const handleTermsScroll = () => {
        const termsBox = termsRef.current;
        const isAtTheEnd = Math.ceil(termsBox.scrollTop + termsBox.offsetHeight) >= termsBox.scrollHeight;

        const checkboxContainer = checkboxRef.current;
        checkboxContainer.style.cursor = isAtTheEnd ? 'default' : 'not-allowed';
    }

    return (
        <>
            <div className="terms-container">       
                <div className="transparency-bg hidden" onClick={handleBackgroundClick} ref={bgRef}>
                    <div className="terms-box" ref={termsBoxRef}>
                    <p className="terms-title">Termos e condições</p>
                    <div className="terms" onScroll={handleTermsScroll} ref={termsRef}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                        cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                        proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    </div>
                    <div className="checkbox-container" onClick={handleCheckboxContainerClick} ref={checkboxRef}>
                        <div className='label'>
                        <input type="checkbox" checked={isChecked} readOnly/>
                        Li e aceito os termos e condições
                        </div>
                    </div>
                    </div>
                </div>
            </div>

            <div className="register-container">
                <div className="popup-hidden registration-success-message">
                    <p>Cadastrado com sucesso!</p>
                </div>
                <div>
                    <NavBar items={items} />
                </div>
                <div className='form-box'>
                    <Form
                        title={'Crie uma conta'}
                        buttonValue={'Criar conta'}
                        buttonWidth={'60%'}
                        buttonFunction={
                            e => {
                                e.preventDefault();

                                document.querySelectorAll('input').forEach(elem => {
                                    elem.classList.remove('fildError');
                                    elem.parentElement.querySelector('label')?.classList.remove('fildError');
                                    errorAlert.current.innerText = '';
                                });

                                let isEmpty = false;
                                const fullName = document.querySelector('input[name="name"]');
                                const cpf = document.querySelector('input[name="cpf"]');
                                const onlyNumCpf = cpf.value.replace(/\D/g, '');
                                const emailInput = document.querySelector('input[name="email"]');
                                const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
                                const isValidEmail = emailRegex.test(emailInput.value);
                                const address = document.querySelector('input[name="address"]');
                                const passwordInput = document.querySelector('input[name="password"]');
                                const passwordRegex = /^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{8,}$/;
                                const isValidPassword = passwordRegex.test(passwordInput.value);
                                const phoneNumber = document.querySelector('input[name="phone"]');
                                const passwordConfirm = document.querySelector('input[name="password-confirm"]');

                                e.target.parentElement.parentElement.querySelectorAll('input').forEach(elem => {
                                    if(elem.value == '') isEmpty = true;
                                });

                                if(!fullName.value) {
                                    errorAlert.current.innerText = 'Preencha o campo do nome completo!';
                                    fullName.classList.add('fildError');
                                    fullName.parentElement.querySelector('label').classList.add('fildError');
                                    return;
                                }

                                if(fullName.value.length < 3) {
                                    errorAlert.current.innerText = 'Informe o seu nome completo!';
                                    fullName.classList.add('fildError');
                                    fullName.parentElement.querySelector('label').classList.add('fildError');
                                    return;
                                }

                                if(!cpf.value) {
                                    errorAlert.current.innerText = 'Preencha o campo do CPF!';
                                    cpf.classList.add('fildError');
                                    cpf.parentElement.querySelector('label').classList.add('fildError');
                                    return;
                                }

                                if(onlyNumCpf.length != 11) {
                                    errorAlert.current.innerText = 'O CPF deve ter onze números!';
                                    cpf.classList.add('fildError');
                                    cpf.parentElement.querySelector('label').classList.add('fildError');
                                    return;
                                }

                                if(!phoneNumber.value) {
                                    errorAlert.current.innerText = 'Preencha o campo do celular!';
                                    phoneNumber.classList.add('fildError');
                                    phoneNumber.parentElement.querySelector('label').classList.add('fildError');
                                    return;
                                }

                                if(phoneNumber.value.length < 15) {
                                    errorAlert.current.innerText = 'Infome um número válido de celular!';
                                    phoneNumber.classList.add('fildError');
                                    phoneNumber.parentElement.querySelector('label').classList.add('fildError');
                                    return;
                                }

                                if(!emailInput.value) {
                                    errorAlert.current.innerText = 'Preencha o campo do email';
                                    emailInput.classList.add('fildError');
                                    emailInput.parentElement.querySelector('label').classList.add('fildError');
                                    return;
                                }

                                if(!isValidEmail) {
                                    errorAlert.current.innerText = 'Informe um email válido!';
                                    emailInput.classList.add('fildError');
                                    emailInput.parentElement.querySelector('label').classList.add('fildError');
                                    return;
                                }

                                if(!address.value) {
                                    errorAlert.current.innerText = 'Preencha o campo do endereço!';
                                    address.classList.add('fildError');
                                    address.parentElement.querySelector('label').classList.add('fildError');
                                    return;
                                }

                                if(address.value.length < 10) {
                                    errorAlert.current.innerText = 'Informe o endereço completo!';
                                    address.classList.add('fildError');
                                    address.parentElement.querySelector('label').classList.add('fildError');
                                    return;
                                }

                                if(!passwordInput.value) {
                                    errorAlert.current.innerText = 'Preencha o campo da senha!';
                                    passwordInput.classList.add('fildError');
                                    passwordInput.parentElement.querySelector('label').classList.add('fildError');
                                    return;
                                }

                                if(!isValidPassword) {
                                    errorAlert.current.innerText = `
                                        A senha deve ter pelo menos:
                                        8 caracteres, 1 letra maiúscula, 1 letra minúscula, 1 número e 1 caractere especial !@#$%^&()
                                    `;
                                    passwordInput.classList.add('fildError');
                                    passwordInput.parentElement.querySelector('label').classList.add('fildError');
                                    return;
                                }
                                
                                if(passwordInput.value != passwordConfirm.value) {
                                    errorAlert.current.innerText = 'As senhas não correspondem!';
                                    passwordInput.classList.add('fildError');
                                    passwordInput.parentElement.querySelector('label').classList.add('fildError');

                                    passwordConfirm.classList.add('fildError');
                                    passwordConfirm.parentElement.querySelector('label').classList.add('fildError');
                                    return;
                                }

                                !isEmpty && handleButtonClick();
                            }
                        }
                        gradient={'true'}
                    >

                        <p className='errorAlert' ref={errorAlert}></p>

                        <Input
                            name={'name'}
                            onChange={
                                e => {
                                    e.target.classList.remove('fildError');
                                    e.target.parentElement.querySelector('label').classList.remove('fildError');
                                    errorAlert.current.innerText = '';                                    
                                }
                            }
                        >Nome completo</Input>
                        <Input
                            name={'cpf'}
                            maxlength={'14'}
                            value={cpfNumber}
                            onChange={
                                e => {
                                    e.target.classList.remove('fildError');
                                    e.target.parentElement.querySelector('label').classList.remove('fildError');
                                    errorAlert.current.innerText = '';

                                    if(/\d/.test(e.nativeEvent.data) || e.nativeEvent.data == null) {
                                        if(e.nativeEvent.data != null) {
                                            console.log(e.target.value.length);

                                            if(e.target.value.length == 4 && e.target.value.indexOf('.') == -1) {
                                                setCpfNumber(`${e.target.value.substring(0, 3)}.${e.nativeEvent.data}`);
                                                return;
                                            }

                                            if(e.target.value.length == 8 && e.target.value.match(/\./g).length) {
                                                setCpfNumber(`${e.target.value.substring(0, 7)}.${e.nativeEvent.data}`);
                                                return;
                                            }

                                            if(e.target.value.length == 12 && e.target.value.indexOf('-') == -1) {
                                                setCpfNumber(`${e.target.value.substring(0, 11)}-${e.nativeEvent.data}`);
                                                return;
                                            }

                                            if(e.target.value.length == 3 || e.target.value.length == 7) {
                                                setCpfNumber(`${e.target.value}.`);
                                                return;
                                            }
                                            if(e.target.value.length == 11) {
                                                setCpfNumber(`${e.target.value}-`);
                                                return;
                                            }
                                        }
                                        setCpfNumber(e.target.value);
                                    } 
                                }
                            }
                        >CPF</Input>
                        <Input
                            name={'phone'}
                            maxlength={'15'}
                            value={phoneNumber}
                            onChange={
                                e => {
                                    const isValid = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(String(e.nativeEvent.data)) || e.nativeEvent.data == null;
                    
                                    if(isValid) {
                                        const num = e.target.value.replace(/\D/g, '');
                    
                                        if(e.nativeEvent.data !== null) {
                    
                                            if(e.target.value.length == 11 && e.target.value != '-') {
                                                setPhoneNumber('(' + num.substring(0, 2) + ') ' + num.substr(2, 5) + '-' + num.slice(-1));
                                            } else {
                                                switch(num.length) {
                                                    case 1:
                                                        setPhoneNumber('(' + num);
                                                        break;
                                                    case 2:
                                                        setPhoneNumber('(' + num + ') 9');
                                                        break;
                                                    case 3:
                                                        setPhoneNumber('(' + num.substring(0, 2) + ') 9' + num.substr(2, 1));
                                                        break;
                                                    case 7:
                                                        setPhoneNumber('(' + num.substring(0, 2) + ') ' + num.substr(2, 5) + '-');
                                                        break;
                                                    default:
                                                        setPhoneNumber(e.target.value);
                                                        break;
                                                }
                                            }
                                        } else {
                                            setPhoneNumber(e.target.value);
                                        }
                                    } else {
                                        setPhoneNumber(e.target.value.substring(0, e.target.value.length - 1));
                                    }

                                    e.target.classList.remove('fildError');
                                    e.target.parentElement.querySelector('label').classList.remove('fildError');
                                    errorAlert.current.innerText = '';
                                }
                            }
                        >Celular</Input>
                        <Input
                            name={'email'}
                            onChange={
                                e => {
                                    e.target.classList.remove('fildError');
                                    e.target.parentElement.querySelector('label').classList.remove('fildError');
                                    errorAlert.current.innerText = '';
                                }
                            }
                        >E-mail</Input>
                        <Input
                            name={'address'}
                            onChange={
                                e => {
                                    e.target.classList.remove('fildError');
                                    e.target.parentElement.querySelector('label').classList.remove('fildError');
                                    errorAlert.current.innerText = '';
                                }
                            }
                        >Endereço</Input>
                        <Input
                            type={'password'}
                            name={'password'}
                            onChange={
                                e => {
                                    e.target.classList.remove('fildError');
                                    e.target.parentElement.querySelector('label').classList.remove('fildError');
                                    errorAlert.current.innerText = '';

                                    const img = document.querySelector('.password-img');
                
                                    if(img.getAttribute('data-visibility') == 'hidden') {
                                        img.src = '\\src\\assets\\img\\password-image.svg';
                                    } else {
                                        img.src = '\\src\\assets\\img\\password-image-lock.svg';
                                    }
                                }
                            }
                        >Senha</Input>
                        <Input
                            type={'password'}
                            name={'password-confirm'}
                            onChange={
                                e => {
                                    e.target.classList.remove('fildError');
                                    e.target.parentElement.querySelector('label').classList.remove('fildError');
                                    errorAlert.current.innerText = '';

                                    const img = document.querySelectorAll('.password-img')[1];
                
                                    if(img.getAttribute('data-visibility') == 'hidden') {
                                        img.src = '\\src\\assets\\img\\password-image.svg';
                                    } else {
                                        img.src = '\\src\\assets\\img\\password-image-lock.svg';
                                    }
                                }
                            }
                        >Confirme a senha</Input>
                    </Form>
                </div>
            </div>
        </>
    )
}

export default Register;