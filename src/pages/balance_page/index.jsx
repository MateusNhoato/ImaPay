import React from 'react';

import Button from '../../components/Button/Button.jsx';
import TopTitle from '../../components/TopTitle/TopTitle.jsx';
import InfoCardComponent from '../../components/InfoCardComponent/InfoCardComponent.jsx';
import InvestimentTable from '../../components/InvestimentTable/InvestimentTable.jsx';
import NavBar from '../../components/NavBar/NavBar.jsx';
import { useContext } from 'react';
import imapayContext from '../../context/imapayContext';
import { useNavigate } from 'react-router-dom';
import './styles.css';

const BalancePage = () => {
    document.title = 'Ímã Pay - Meu saldo';

    const navigate = useNavigate()
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
                        value='5.472,00'
                    />
                    <InfoCardComponent
                        title='Investimentos'
                        value='22.652,00'
                    />
                    <InfoCardComponent
                        title='Poupança'
                        value='642,00'
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