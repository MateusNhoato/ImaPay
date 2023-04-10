import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import Button from '../../components/Button/Button';
import './error.css'
import { useNavigate } from 'react-router-dom';

const Error = () => {
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
    return (<>
        <NavBar items={items}/>
        <div className='error-container'>
            <h2>Aconteceu algum erro!</h2>
            <a>Voltar para página inicial.</a>
        </div>
        </>  );
}
 
export default Error;