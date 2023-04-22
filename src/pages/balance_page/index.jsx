import { React, useContext, useState, useEffect } from 'react';

import Button from '../../components/Button/Button.jsx';
import TopTitle from '../../components/TopTitle/TopTitle.jsx';
import InfoCardComponent from '../../components/InfoCardComponent/InfoCardComponent.jsx';
import InvestimentTable from '../../components/InvestimentTable/InvestimentTable.jsx';
import NavBar from '../../components/NavBar/NavBar.jsx';
import imapayContext from '../../context/imapayContext';
import { useNavigate } from 'react-router-dom';
import './styles.css';

const BalancePage = () => {
    document.title = 'Ímã Pay - Meu saldo';

    const navigate = useNavigate()

    const [data, setData] = useState({});
    const [error, setError] = useState ({});

    useEffect(() => {
        const request = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };
        fetch('https://6442f8f433997d3ef91d4a1b.mockapi.io/api/v1/balance/1', request)
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

    console.log(data);
    const investimentData = [
        {
            type: 'CDI',
            date: '10/02/2022',
            details: 'Rendendo acima da margem',
            performance: '1,9% ao mês',
        },
        {
            type: 'CDI',
            date: '10/03/2022',
            details: 'Rendendo acima da margem',
            performance: '1,9% ao mês',
        },
        {
            type: 'CDI',
            date: '10/05/2022',
            details: 'Rendendo acima da margem',
            performance: '1,9% ao mês',
        },
        {
            type: 'CDI',
            date: '10/08/2022',
            details: 'Rendendo acima da margem',
            performance: '1,9% ao mês',
        },
    ]

    const items = [
        <Button
        label={'Histórico de transações'}
        width={''}
        backgroundColor={'#111827'}
        click={() => navigate('/user/transactionHistory')}
        hoverColor={'var(--secondary-color)'}
        leaveColor={'var(--primary-color)'}/>,
        
        <Button
        label={'Transferência bancária'}
        width={''}
        backgroundColor={''}
        click={() => navigate('/user/transfer')}/>
    ];
    
    return (
        <>
            <div className='balance-container'>
                <NavBar items={items} />

                <TopTitle
                    title='Olá, seja bem-vindo!'
                    subtitle='Saldo atual:'
                />           

                <div className='component-cards'>
                    <InfoCardComponent
                        title='Conta corrente'
                        value={data.balance}
                    />
                    <InfoCardComponent
                        title='Investimentos'
                        value={data.investments}
                    />
                    <InfoCardComponent
                        title='Poupança'
                        value={data.savings}
                    />
                </div>

                <hr />        

                <InvestimentTable
                    investimentData={investimentData}
                />
            </div>
        </>
    )
}

export default BalancePage;