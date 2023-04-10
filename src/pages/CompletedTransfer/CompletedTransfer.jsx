import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../components/Button/Button';
import InfoCardComponent from '../../components/InfoCardComponent/InfoCardComponent';
import NavBar from '../../components/NavBar/NavBar';
import imapayContext from '../../context/imapayContext';

import '../../App.css';
import './CompletedTransfer.css'
import '../../components/Button/Button.css'

const CompleatTransfer = () => {
    const { accountType, transferDate, agency, account, transferValue } = useContext(imapayContext);
    const navigate = useNavigate();
    
    const items = [<Button
        label={'Saldo'}
        width={''}
        backgroundColor={'#111827'}
        click={() => navigate('/user/balance')}
        hoverColor={'var(--secondary-color)'}
        leaveColor={'var(--primary-color)'}/>,

        <Button
        label={'Histórico de transações'}
        width={''}
        backgroundColor={'#111827'}
        click={() => navigate('/user/transactionHistory')}
        hoverColor={'var(--secondary-color)'}
        leaveColor={'var(--primary-color)'}
    />];

    const navigateToTransferPage = () => {
        navigate('/user/transfer')
    }

    const compleatTransfer = (
        <div>
            <NavBar items={items} />
            
            <div>
                <div className="transfer-div">
                    <div className="transfer-title">Transferência concluída</div>
                </div>
                
                <div className="transfer-completed">
                    <h2>Tipo de conta</h2>
                    <p>{accountType}</p>
                    <h2>Data de transferência</h2>
                    <p>{transferDate}</p>
                    <h2>Agência</h2>
                    <p>{agency}</p>
                    <h2>Conta</h2>
                    <p>{account}</p>
                    <h2>Valor da transferência</h2>
                    <p>{transferValue}</p>
                </div>
            </div>

            <div className="btn-form">
                <Button
                    label={'Nova transferência'}
                    width={'25%'}
                    backgroundColor={'var(--secondary-color)'}
                    click={navigateToTransferPage}
                    hoverColor={'var(--primary-color)'}
                    leaveColor={'var(--secondary-color)'}
                />
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
        compleatTransfer
    )
};

export default CompleatTransfer;
