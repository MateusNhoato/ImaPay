import React from 'react';

import Button from '../../components/Button/Button';
import Form from '../../components/Form/Form';
import Input from '../../components/Input/Input';
import InfoCardComponent from '../../components/InfoCardComponent/InfoCardComponent';
import NavBar from '../../components/NavBar/NavBar';

import '../../App.css';
import './TransferPage.css'

const TransferPage = () => {
    
    const items = [<Button
        label={'Histórico de transações'}
        width={''}
        backgroundColor={'#111827'}
        click={() => {alert('Histórico de transações')}}
        hoverColor={'var(--secondary-color)'}
        leaveColor={'var(--primary-color)'}
    />];

    return (
        <div>
            <NavBar items={items} />
            
            <div >
                <div className="transfer-div">
                    <div className="transfer-title">Transferência bancária</div>
                </div>
                <Form
                    buttonValue={'Confirmar transferência'}
                    buttonWidth={'80%'}
                    click={() => {}}
                    hoverColor={'#111827'}
                    leaveColor={'#288484'}
                    gradient={false}
                >
                    <Input>Tipo de conta</Input>
                    <Input>Data de transferência</Input>
                    <Input>Agência (sem dígito)</Input>
                    <Input>Conta (com dígito)</Input>
                    <Input>Valor da transferência</Input>
                </Form>
            </div>
            <p className='salto-atual'> Saldo atual: </p>
            <div className="infoCardComponent">
                <InfoCardComponent
                    title="Conta corrente"
                    value="5.472,00"
                />
                <InfoCardComponent
                    title="Investimentos"
                    value="22.652,00"
                />
                <InfoCardComponent
                    title="Poupança"
                    value="642,00"
                />
            </div>
        </div>
    )
};

export default TransferPage;