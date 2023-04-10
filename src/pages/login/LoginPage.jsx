import {React, useState, useRef, useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import imapayContext from '../../context/imapayContext';

import InfoCardComponent from '../../components/InfoCardComponent/InfoCardComponent';
import Button from '../../components/Button/Button';
import Form from '../../components/Form/Form';
import Input from '../../components/Input/Input';
import NavBar from '../../components/NavBar/NavBar';

// import '../../App.css';
import './styles.css';

const LoginPage = () => {
    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword , setLoginPassword] = useState('');
    const alertInvalidFields = useRef();

    const { setUserLogin, isUserLoggedIn } = useContext(imapayContext);
    const navigate = useNavigate()
  
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
                    buttonFunction={ () => navigate('/user/balance')}
                    gradient={true}
                    lowLinkRef = {'/password'}
                    lowLinkValue ={'Esqueceu a senha?'}
                    handleSubmit = {event => {
                        event.preventDefault();
                        if(!loginEmail){ 
                            alertInvalidFields.current.innerText = 'Informe o email de login';
                            return;
                        }
                        if(!loginPassword){
                            alertInvalidFields.current.innerText = 'Informe a senha de login ';
                            return;
                        }
                        alertInvalidFields.current.innerText = '';

                    }}
                    
                >
                    <p className='alert-invalid-fields' ref={alertInvalidFields}></p>
                    <Input
                        type={'email'}
                        value={loginEmail}
                        onChange={e => {
                            setLoginEmail(e.target.value);
                        }}
                    >E-mail</Input>

                    <Input
                        type={'password'}
                        value={loginPassword}
                        onChange={e => {
                            setLoginPassword(e.target.value);
                        }}
                    >Senha</Input>                             
                </Form>              
                
            </div>          
        </div>
    )
};

export default LoginPage;
