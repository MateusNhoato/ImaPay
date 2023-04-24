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


    const parseDate = (date) => {
        date = date.slice(0,10);
        let parsedDate = date.replace(/-/g,'/');
        parsedDate = parsedDate.slice(8,10) + parsedDate.slice(4,8) + parsedDate.slice(0,4);
        return parsedDate;
    }

    let totalInvestment = 0.0;
    let investmentsArray = [];
    let investmentsLength = 4;
    let investmentsData = data.investments;

    for (let i = 0; i < investmentsLength.length; i++) {
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
    
    return (
        <>
            <div className='balance-container'>
                <NavBar items={items} />

                <TopTitle
                    title='Seja bem-vindo(a)!'
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
                    investimentData={investmentsArray}
                />
            </div>
        </>
    )
}

export default BalancePage;