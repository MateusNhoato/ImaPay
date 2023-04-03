import React from 'react';

import Logo from '../../components/Logo/Logo.jsx';
import Button from '../../components/Button/Button.jsx';
import TopTitle from '../../components/TopTitle/TopTitle.jsx';
import InfoCardComponent from '../../components/InfoCardComponent/InfoCardComponent.jsx';
import Table from '../../components/Table/Table.jsx';

const BalancePage = () => {
    return (
        <>
            <Logo />

            <Button
                label='Transferência bancária'
                width='330px'
                backgroundColor='black'
            />
            <Button
                label='Histórico de transações'
                width='330px'
                backgroundColor='black'
            />

            <TopTitle
                title='Bom dia, Ana!'
                subtitle='Saldo atual:'
                styleTitle={''}
                styleSubtitle={''}
            />

            <div>
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

            <Table />
        </>
    )
}

export default BalancePage;