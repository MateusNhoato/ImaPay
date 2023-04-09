import React from 'react';

import Button from '../../components/Button/Button';
import Form from '../../components/Form/Form';
import Input from '../../components/Input/Input';
import NavBar from '../../components/NavBar/NavBar';

import '../../App.css';
import './LoginPage.css'

import { useNavigate } from "react-router-dom";

const LoginPage = () => {
    const navigate = useNavigate()
    const items = [<Button
        label={'Cadastre-se'}
        width={''}
        backgroundColor={'#111827'}
        click={()=>navigate('/register')}
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
                    buttonFunction={()=>navigate('/balance_page')}
                    // lowLinkRef = {colocar o link}
                    lowLinkValue ={'Esqueceu a senha?'}
                >
                    <Input>E-mail</Input>
                    <Input>Senha</Input>                               
                </Form>              
                
            </div>          
        </div>
    )
};

export default LoginPage;