import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../components/Button/Button';
import InfoCardComponent from '../../components/InfoCardComponent/InfoCardComponent';
import NavBar from '../../components/NavBar/NavBar';
import imapayContext from '../../context/imapayContext';

import '../../App.css';
import './compleatTransfer.css'

const CompleatTransfer = () => {
    const { accountType, transferDate, agency, account, transferValue } = useContext(imapayContext);
    const navigate = useNavigate();
    
    const items = [<Button
        label={'Histórico de transações'}
        width={''}
        backgroundColor={'#111827'}
        click={() => {alert('Histórico de transações')}}
        hoverColor={'var(--secondary-color)'}
        leaveColor={'var(--primary-color)'}
    />];

    const navigateToTransferPage = () => {
        navigate("/transfer")
    }

    const compleatTransfer = (
        <div>
            <NavBar items={items} />
            
            <div>
                <div className="transfer-div">
                    <div className="transfer-title">Transferência concluída</div>
                </div>
                <h1>Tipo de conta</h1>
                <p>{accountType}</p>

                <h1>Data de transferência</h1>
                <p>{transferDate}</p>

                <h1>Agência</h1>
                <p>{agency}</p>

                <h1>Conta</h1>
                <p>{account}</p>

                <h1>Valor da transferência</h1>
                <p>{transferValue}</p>
            </div>

            <Button
                label={'Nova transferência'}
                width={''}
                backgroundColor={'#111827'}
                click={navigateToTransferPage}
                hoverColor={'var(--secondary-color)'}
                leaveColor={'var(--primary-color)'}
            />

            <p className='saldo-atual'> Saldo atual: </p>
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
