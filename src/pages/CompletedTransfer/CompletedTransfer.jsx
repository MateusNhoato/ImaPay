import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../components/Button/Button';
import InfoCardComponent from '../../components/InfoCardComponent/InfoCardComponent';
import NavBar from '../../components/NavBar/NavBar';
import imapayContext from '../../context/imapayContext';

import '../../App.css';
import './CompletedTransfer.css'
import '../../components/Button/Button.css'

const CompleatTransfer = () => {
    document.title = 'Ímã Pay - Transferência concluída';
    
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

    const transferData = localStorage.getItem('transferData');

    const transferObject = JSON.parse(transferData);
    
    const dataHora = new Date(transferObject.date);
    
    const opcoes = { timeZone: 'America/Sao_Paulo' };
    const dataHoraFormatada = dataHora.toLocaleString('pt-BR', opcoes).replace(',','').slice(0,10);

    const valueTransaction = `R$ ${transferObject.valueTransaction}`.replace('.',',');

    const [data, setData] = useState({});
    const [error, setError] = useState ({});

    
    useEffect(() => {
        const token = localStorage.getItem('token');
        const request = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json', 'token': token },
        };
        fetch('https://imapayapi-production.up.railway.app/api/ImaPay/Info', request)
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
            throw response;
        })
        .then(data => {
            setData(data);
        })
        .catch((error) => {
            console.error("Error fetching data: ", error);
            setError(error);
        })
    }, [])


    const compleatTransfer = (
        <div>
            <NavBar items={items} />
            
            <div>
                <div className="transfer-div">
                    <div className="transfer-title">Transferência concluída</div>
                </div>
                
                <div className="transfer-completed">
                    <h2>Tipo de conta</h2>
                    <p>{transferObject.accountType}</p>
                    <h2>Data de transferência</h2>
                    <p>{dataHoraFormatada}</p>
                    <h2>Agência</h2>
                    <p>{transferObject.agency}</p>
                    <h2>Conta</h2>
                    <p>{transferObject.account}</p>
                    <h2>Valor da transferência</h2>
                    <p>{valueTransaction}</p>
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
                    value={data.balance}
                />
                <InfoCardComponent
                    title="Investimentos"
                    value={data.investments}
                />
                <InfoCardComponent
                    title="Poupança"
                    value={data.savings}
                />
            </div>
        </div>
    )

    return (
        compleatTransfer
    )
};

export default CompleatTransfer;
