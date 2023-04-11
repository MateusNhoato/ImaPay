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

        if (isAtTheEnd) {
            setIsChecked(!isChecked);
            setTimeout(() => {
                navigate('/login')
            }, 1000);
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
                                let isEmpty = false;

                                e.target.parentElement.parentElement.querySelectorAll('input').forEach(elem => {
                                    if(elem.value == '') isEmpty = true;
                                });

                                !isEmpty && handleButtonClick();
                            }
                        }
                        gradient={'true'}
                    >
                        <Input>Nome completo</Input>
                        <Input>CPF</Input>
                        <Input>Celular</Input>
                        <Input>E-mail</Input>
                        <Input>Endereço</Input>
                        <Input>Senha</Input>
                    </Form>
                </div>
            </div>
        </>
    )
}

export default Register;