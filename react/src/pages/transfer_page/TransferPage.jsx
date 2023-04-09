import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../components/Button/Button';
import Form from '../../components/Form/Form';
import Input from '../../components/Input/Input';
import InfoCardComponent from '../../components/InfoCardComponent/InfoCardComponent';
import NavBar from '../../components/NavBar/NavBar';
import imapayContext from '../../context/imapayContext';

import '../../App.css';
import './TransferPage.css'

const TransferPage = () => {
    const { setAccountType, setTransferDate, setAgency, setAccount, setTransferValue } = useContext(imapayContext);
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        navigate("/completedTransfer")
    }

    const items = [<Button
        label={'Histórico de transações'}
        width={''}
        backgroundColor={'#111827'}
        click={() => {alert('Histórico de transações')}}
        hoverColor={'var(--secondary-color)'}
        leaveColor={'var(--primary-color)'}
    />];

    const formTransfer = (
        <div>
            <NavBar items={items} />
            
            <div>
                <div className="transfer-div">
                    <div className="transfer-title">Transferência bancária</div>
                </div>
                <Form
                    buttonValue={'Confirmar transferência'}
                    buttonWidth={'80%'}
                    buttonFunction={handleSubmit}
                    hoverColor={'#111827'}
                    leaveColor={'#288484'}
                    gradient={false}
                >
                    <Input inputFunction={setAccountType}>Tipo de conta</Input>
                    <Input inputFunction={setTransferDate}>Data de transferência</Input>
                    <Input inputFunction={setAgency}>Agência (sem dígito)</Input>
                    <Input inputFunction={setAccount}>Conta (com dígito)</Input>
                    <Input inputFunction={setTransferValue}>Valor da transferência</Input>
                </Form>
            </div>

            <p className="saldo-atual"> Saldo atual: </p>
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

    return (
        formTransfer
    )
};

export default TransferPage;
