import { React, useContext, useState, useEffect } from 'react';

import Button from '../../components/Button/Button.jsx';
import TopTitle from '../../components/TopTitle/TopTitle.jsx';
import InfoCardComponent from '../../components/InfoCardComponent/InfoCardComponent.jsx';
import InvestimentTable from '../../components/InvestimentTable/InvestimentTable.jsx';
import NavBar from '../../components/NavBar/NavBar.jsx';
import { useNavigate } from 'react-router-dom';
import './styles.css';

const BalancePage = () => {
    document.title = 'Ímã Pay - Meu saldo';

    const navigate = useNavigate()

    const [balanceData, setBalanceData] = useState({});
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
        .then(balanceData => {
            setBalanceData(balanceData)
        })
        .catch((error) => {
            console.error("Error fetching data: ", error);
            setError(error);
        })
    }, [])


    const [investmentsData, setInvestmentsData] = useState({});

    useEffect(() => {
        const request = {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        };
        fetch('https://6442f8f433997d3ef91d4a1b.mockapi.io/api/v1/investments', request)
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
            throw response;
        })
        .then(investmentsData => {
            setInvestmentsData(investmentsData);
        })
        .catch((error) => {
            console.error("Error fetching data: ", error);
            setError(error);
        })
    }, [])


    const parseDate = (date) => {
        date = date.slice(0,10);
        let parsedDate = date.replace(/-/g,'/');
        parsedDate = parsedDate.slice(8,10) + parsedDate.slice(4,8) + parsedDate.slice(0,4);
        return parsedDate;
    }

    let totalInvestment = 0.0;
    let investmentsArray = [];

    for (let i = 0; i < investmentsData.length; i++) {
        const type = 'CDI';
        const date = parseDate(investmentsData[i]['createdAt']);
        const details = 'Rendendo acima da margem';
        totalInvestment += parseFloat(investmentsData[i]['value']);
        const performance = (investmentsData[i]['value'] / 100).toFixed(2).toString() + '%';
        investmentsArray.push({type, date, details, performance});
    }

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

    const wellcome = `Olá, ${balanceData.userName}`;
    const accountNumber = `${balanceData.account?.slice(0,4)}-${balanceData.account?.slice(-1)}`;
    
    return (
        <>
            <div className='balance-container'>
                <NavBar items={items} />

                <TopTitle
                    title={wellcome}
                    subtitle='Saldo atual:'
                />           

                <div className='component-cards'>
                    <InfoCardComponent
                        title='Conta corrente'
                        value={balanceData.balance}
                    />
                    <InfoCardComponent
                        title='Investimentos'
                        value={totalInvestment.toFixed(2)}
                    />
                    <InfoCardComponent
                        title='Poupança'
                        value={balanceData.savings}
                    />
                </div>

                <div className='cards-containers'>
                    <div className='agency-card'>
                        <span className='card-name'>Agência</span>
                        <span>{balanceData.agency}</span>
                    </div>

                    <div className='account-card'>
                        <span className='card-name'>Conta</span>
                        <span>{accountNumber}</span>
                    </div>
                </div>


                <hr />        

                <InvestimentTable
                    investimentData={investmentsArray}
                />
            </div>
        </>
    )
}

export default BalancePage;