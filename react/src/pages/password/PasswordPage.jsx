import React from 'react';

import Button from '../../components/Button/Button';
import Form from '../../components/Form/Form';
import Input from '../../components/Input/Input';
import NavBar from '../../components/NavBar/NavBar';

import '../../App.css';
import './PasswordPage.css';

const PasswordPage = () => {

    const items = [<Button
        label={'Login'}
        width={''}
        backgroundColor={'#111827'}
        click={() => {alert('Login')}}
        hoverColor={'var(--primary-color)'}
        leaveColor={'var(--secondary-color)'}
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
                    // lowLinkRef = {colocar o link}
                    // lowLinkValue ={'Usar número de telefone'}
                >
                    <h3 className='form-h3'>Forneça o E-mail cadastrado e enviaremos o código para alterar a senha:</h3>
                    <div className='form-input'><Input>E-mail</Input></div>                                                                       
                </Form>              
                
            </div>          
        </div>
    )
};

export default PasswordPage;