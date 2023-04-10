import React from 'react';

import Button from '../../components/Button/Button';
import Form from '../../components/Form/Form';
import Input from '../../components/Input/Input';
import NavBar from '../../components/NavBar/NavBar';

import '../../App.css';
import './PasswordPage.css'
import { useNavigate } from 'react-router-dom';
const PasswordPage = () => {
    const navigate = useNavigate()
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
        <div>
            <NavBar items={items} />

            <div className='form-box'>
                
                <Form
                    title={'Recuperação de senha'}                                      
                    buttonValue={'Enviar'}
                    buttonWidth={'90%'}
                    gradient={true}
                >
                    <h3 className='form-h3'>Forneça o E-mail cadastrado e enviaremos o código para alterar a senha</h3>
                    <div className='form-input'><Input>E-mail</Input></div>                                                                       
                </Form>              
                
            </div>          
        </div>
    )
};

export default PasswordPage;