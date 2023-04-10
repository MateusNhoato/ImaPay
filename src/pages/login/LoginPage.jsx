import {React, useContext} from 'react';
import { useNavigate } from 'react-router-dom';

import imapayContext from '../../context/imapayContext';
import Button from '../../components/Button/Button';
import Form from '../../components/Form/Form';
import Input from '../../components/Input/Input';
import NavBar from '../../components/NavBar/NavBar';

// import '../../App.css';
import './styles.css';

const LoginPage = () => {
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
                    
                >
                    <Input>E-mail</Input>
                    <Input>Senha</Input>                               
                </Form>              
                
            </div>          
        </div>
    )
};

export default LoginPage;