import {React, useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import Login from '../../models/login';
import Button from '../../components/Button/Button';
import Form from '../../components/Form/Form';
import Input from '../../components/Input/Input';
import NavBar from '../../components/NavBar/NavBar';

import './styles.css';

const LoginPage = () => {
    document.title = 'Ímã Pay - Login';

    const navigate = useNavigate();

    const errorAlert = useRef();
  
    const items = [<Button
        label={'Cadastre-se'}
        width={''}
        backgroundColor={'#111827'}
        click={() => navigate('/register')}
        hoverColor={'var(--primary-color)'}
        leaveColor={'var(--secondary-color)'}
    />];

    return (
        <div className='login-container'>
            <NavBar items={items} />

            <div className='form-box'>
            
                <Form
                    title={'Entre na sua conta'}
                    buttonValue={'Login'}
                    buttonWidth={'90%'}
                    buttonFunction={ 
                        e => {
                            e.preventDefault();
                            const emailInput = e.target.parentElement.parentElement.querySelector('input[name="email"]');
                            const passwordInput = e.target.parentElement.parentElement.querySelector('input[type="password"]');
                            const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
                            const isValidEmail = emailRegex.test(emailInput.value);
                            const passwordRegex = /^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{8,}$/;
                            const isValidPassword = passwordRegex.test(passwordInput.value);
                            const login = new Login();
                            login.email = emailInput;
                            login.password = passwordInput;

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

                            if(!passwordInput.value) {
                                errorAlert.current.innerText = 'Preencha o campo da senha!';
                                return;
                            }

                            if(!isValidPassword) {
                                errorAlert.current.innerText = `
                                    A senha deve ter pelo menos:
                                    8 caracteres, 1 letra maiúscula, 1 letra minúscula, 1 número e 1 caractere especial !@#$%^&()
                                `;
                                return;
                            }

                            errorAlert.current.innerText = '';
                            
                            if(isValidEmail)
                            {
                                const requestOptions = {
                                    method: 'POST',
                                    headers: { 'Content-Type': 'application/json' },
                                    body: JSON.stringify({ body: login})
                                };
                                fetch('https://imapayapi.azurewebsites.net/api/ImaPay/Login', requestOptions)
                                    .then(async response => {                                   
                                        if(response.ok)
                                        {
                                            setTimeout(() => {
                                                navigate('/user/balance');
                                            }, 1000);
                                        }
                                        else if (!response.ok) {
                                            errorAlert.current.innerText = 'Error!';
                                            emailInput.classList.add('fildError');
                                            emailInput.parentElement.querySelector('label').classList.add('fildError');
                                            return;
                                        }                         
                                    })
                                    .catch(error => {
                                        this.setState({ errorMessage: error.toString() });
                                        console.error('There was an error!', error);
                                    });                                
                            }                                                                       
                        }
                    }
                    gradient={true}
                    lowLinkRef = {'/password'}
                    lowLinkValue ={'Esqueceu a senha?'}
                >

                    <p className='errorAlert' ref={errorAlert}></p>

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
                        type={'password'}
                        onChange={
                            e => {
                                e.target.classList.remove('fildError');
                                e.target.parentElement.querySelector('label').classList.remove('fildError');
                                errorAlert.current.innerText = '';
                            }
                        }
                    >Senha</Input>                               
                </Form>              
                
            </div>          
        </div>
    )
};

export default LoginPage;