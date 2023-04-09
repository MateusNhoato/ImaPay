import React from 'react';

// import Logo from '../../components/Logo/Logo.jsx';
import Button from '../../components/Button/Button.jsx';
import TopTitle from '../../components/TopTitle/TopTitle.jsx';
import InfoCardComponent from '../../components/InfoCardComponent/InfoCardComponent.jsx';
import InvestimentTable from '../../components/InvestimentTable/InvestimentTable.jsx';
import { useNavigate } from "react-router-dom";

const BalancePage = () => {
    const navigate = useNavigate();
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

    return (
        <>
            <div className='img-logo-box'>
                <img src="/src/assets/img/logotipo.svg" alt="Logo" width="20%" />
            </div>

            <div className='btn-div'>
                <Button
                    label={'Transferência bancária'}
                    width={''}
                    backgroundColor={''}
                    click={() => navigate('/transferPage')}
                />
                <Button
                    label={'Histórico de transações'}
                    width={''}
                    backgroundColor={''}
                    click={() => {}}
                />
            </div>

            <TopTitle
                title='Bom dia, Ana!'
                subtitle='Saldo atual:'
                styleTitle={{
                    fontSize: '27px',
                    fontWeight: 'bold',
                }}
                styleSubtitle={{
                    left: '-100px',
                    top: '33px',
                    fontSize: '17px',
                }}
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
        </>
    )
}

export default BalancePage;