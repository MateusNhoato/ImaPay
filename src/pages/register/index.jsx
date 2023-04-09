import React from "react";

import Form from "../../components/Form/Form";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import NavBar from "../../components/NavBar/NavBar";

import '../../components/Form/Form.css'

const Register = () => {

    const items = [<Button
        label={'Login'}
        width={''}
        backgroundColor={'var(--primary-color)'}
        click={() => {alert('Login')}}
        hoverColor={'var(--secondary-color)'}
        leaveColor={'var(--primary-color)'}
    />];

    return (
        <>
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
        </>
    )
}

export default Register;