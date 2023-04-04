import React from "react";
import Form from "../../components/Form/Form";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import './styles.css';

const Register = () => {
    return (
        <>
            <div className='img-logo-box'>
                <img src="/src/assets/img/logotipo.svg" alt="Logo" width="20%" />
            </div>

            <div className='button-box'>
                <Button
                    label={'Login'}
                />
            </div>

            <div className='form-box'>
                <Form
                    title={'Crie uma conta'}
                    buttonValue={'Criar conta'}
                    buttonWidth={'100%'}
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