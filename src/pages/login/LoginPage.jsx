import {React, useState, useRef} from 'react';
import InfoCardComponent from '../../components/InfoCardComponent/InfoCardComponent';
import Button from '../../components/Button/Button';
import Form from '../../components/Form/Form';
import Input from '../../components/Input/Input';
import NavBar from '../../components/NavBar/NavBar';

import '../../App.css';

const LoginPage = () => {

    const [loginEmail, setLoginEmail] = useState('');
    const [loginPassword , setLoginPassword] = useState('');

    const alertInvalidFields = useRef();

    const items = [<Button
        label={'Cadastre-se'}
        width={''}
        backgroundColor={'#111827'}
        click={() => {alert('Cadastre-se')}}
        hoverColor={'var(--primary-color)'}
        leaveColor={'var(--secondary-color)'}
    />];

    return (
        <div>
            <NavBar items={items} />

            <div className='form-box'>
                <Form
                    title={'Entre na sua conta'}
                    buttonValue={'Login'}
                    buttonWidth={'90%'}
                    gradient={true}
                    // lowLinkRef = {colocar o link}
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