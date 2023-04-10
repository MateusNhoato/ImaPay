import {React, useState, useRef} from 'react';
import Form from "../../components/Form/Form";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import NavBar from "../../components/NavBar/NavBar";
<<<<<<< HEAD
import InfoCardComponent from '../../components/InfoCardComponent/InfoCardComponent';
import '../../components/Form/Form.css'

const Register = () => {

    const [fullName, setFullName] = useState('');
    const [cpfNumber, setCpfNumuber] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [password, setPassword] = useState('');

    const alertInvalidFields = useRef();

=======
import { useNavigate } from "react-router-dom";
import './styles.css';


// import '../../components/Form/Form.css'


const Register = () => {
    const navigate = useNavigate() 
>>>>>>> Desenvolvimento
    const items = [<Button
        label={'Login'}
        width={''}
        backgroundColor={'var(--primary-color)'}
        click={() => navigate('/login')}
        hoverColor={'var(--secondary-color)'}
        leaveColor={'var(--primary-color)'}
    />];

    return (
        <>
<<<<<<< HEAD
            <div>
                <NavBar items={items} />
            </div>
            <div className='form-box'>
                <Form
                    title={'Crie uma conta'}
                    buttonValue={'Criar conta'}
                    buttonWidth={'60%'}
                    gradient={'true'}
                    click={() => {}}
                    handleSubmit={event => {
                        event.preventDefault();
                        if(!fullName){
                            alertInvalidFields.current.innerText = 'Informe seu nome completo';
                            return;
                        }
                        if(!cpfNumber){
                            alertInvalidFields.current.innerText = 'Informe seu número de CPF';
                            return;
                        }
                        if(!phoneNumber){
                            alertInvalidFields.current.innerText = 'Informe seu número de celular';
                            return;
                        }
                        if(!email){
                            alertInvalidFields.current.innerText = 'Informe seu endereço de email';
                            return;
                        }
                        if(!address){
                            alertInvalidFields.current.innerText = 'Informe seu endereço';
                            return;
                        }
                        if(!password){
                            alertInvalidFields.current.innerText = 'Informe sua senha';
                            return;
                        }
                        
                    }}
                >
                    <p className='alert-invalid-fields' ref={alertInvalidFields}></p>
                    <Input
                        type={'text'}
                        value={fullName}
                        onChange={e => {
                            setFullName(e.target.value);
                        }}
                    >Nome completo</Input>

                    <Input
                        type={'text'}
                        value={cpfNumber}
                        onChange={e => {
                            setCpfNumuber(e.target.value);
                        }}
                    >CPF</Input>

                    <Input
                        type={'text'}
                        value={phoneNumber}
                        onChange={e => {
                            setPhoneNumber(e.target.value);
                        }}                 
                    >Celular</Input>

                    <Input
                        type={'email'}
                        value={email}
                        onChange={e => {
                            setEmail(e.target.value);
                        }}
                    >E-mail</Input>

                    <Input
                        type={'text'}
                        value={address}
                        onChange={e => {
                            setAddress(e.target.value);
                        }}                       
                    >Endereço</Input>

                    <Input
                        type={'text'}
                        value={password}
                        onChange={e => {
                            setPassword(e.target.value);
                        }} 
                    >Senha</Input>
                </Form>
=======
            <div className="register-container">
                <div>
                    <NavBar items={items} />
                </div>
                <div className='form-box'>
                    <Form
                        title={'Crie uma conta'}
                        buttonValue={'Criar conta'}
                        buttonWidth={'60%'}
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
>>>>>>> Desenvolvimento
            </div>
        </>
    )
}

export default Register;