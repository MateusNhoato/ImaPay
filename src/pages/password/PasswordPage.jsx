import React, { useRef } from 'react';

import Button from '../../components/Button/Button';
import Form from '../../components/Form/Form';
import Input from '../../components/Input/Input';
import NavBar from '../../components/NavBar/NavBar';

import '../../App.css';
import './PasswordPage.css'
import { useNavigate } from 'react-router-dom';

const PasswordPage = () => {
    document.title = 'Ímã Pay - Recuperação de senha';

    const navigate = useNavigate();
    const errorAlert = useRef();


    const items = [<Button
        label={'Cadastre-se'}
        width={''}
        backgroundColor={'var(--secondary-color)'}
        click={() => navigate('/register')}
        hoverColor={'var(--primary-color)'}
        leaveColor={'var(--secondary-color)'}
    />,
    <Button
        label={'Login'}
        width={''}
        backgroundColor={'var(--primary-color)'}
        click={() => navigate('/login')}
        hoverColor={'var(--secondary-color)'}
        leaveColor={'var(--primary-color)'}
    />];

    return (
        <div className='password-container'>
            <NavBar items={items} />

            <div className='form-box'>
                
                <Form
                    title={'Recuperação de senha'}                                      
                    buttonValue={'Enviar'}
                    buttonWidth={'90%'}
                    gradient={true}
                    buttonFunction={ 
                        e => {
                            e.preventDefault();
                            const emailInput = e.target.parentElement.parentElement.querySelector('input[name="email"]');
                            const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
                            const isValidEmail = emailRegex.test(emailInput.value);

                            if(!emailInput.value) {
                                errorAlert.current.innerText = 'Preencha o campo do email';
                                return;
                            }

                            if(!isValidEmail) {
                                errorAlert.current.innerText = 'Informe um email válido!';
                                emailInput.classList.add('fildError');
                                emailInput.parentElement.querySelector('label').classList.add('fildError');
                                return;
                            }

                            errorAlert.current.innerText = '';

                            setTimeout(() => {
                                navigate('/login');
                            }, 1000);
                        }
                    }
                >
                    <h3 className='form-h3'>Forneça o e-mail cadastrado e enviaremos o código para alterar a senha</h3>

                    <p className='errorAlert' ref={errorAlert}></p>

                    <div className='form-input'>
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
                        </div>                                                                       
                </Form>              
                
            </div>          
        </div>
    )
};

export default PasswordPage;