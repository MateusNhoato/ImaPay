import {React, useState, useRef} from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../components/Button/Button';
import Form from '../../components/Form/Form';
import Input from '../../components/Input/Input';
import InfoCardComponent from '../../components/InfoCardComponent/InfoCardComponent';
import NavBar from '../../components/NavBar/NavBar';


import '../../App.css';
import './TransferPage.css'

const TransferPage = () => {

    const [accountType, setAccountType] = useState('');
    const [transferDate, setTransferDate] = useState('');
    const [bankAgency, setbankAgency] = useState('');
    const [accountNumber, setAccountNuber] = useState('');
    const [valueTransfer , setValueTransfer] = useState('');

    const alertInvalidFields = useRef();

    const navigate = useNavigate();



    // foi alterado o local para execucao do navigate esta no handle submit do form
    // const handleSubmit = (event) => {
    //     navigate("/completedTransfer")
    // }


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
        leaveColor={'var(--primary-color)'}/>
    ];

    const formTransfer = (
        <>
            <NavBar items={items} />
            
            <div>
                <div className="transfer-div">
                    <div className="transfer-title">Transferência bancária</div>
                </div>
                <Form
                    buttonValue={'Confirmar transferência'}
                    buttonWidth={'80%'}
                    buttonFunction={() => navigate('/user/completedTransfer')}
                    hoverColor={'#111827'}
                    leaveColor={'#288484'}
                    gradient={false}
                    handleSubmit={event => {
                        event.preventDefault();
                        if(!accountType){ 
                            alertInvalidFields.current.innerText = 'Tipo da conta não informado';
                            return;
                        }

                        if(!transferDate){ 
                            alertInvalidFields.current.innerText = 'Informe uma data para transferência';
                            return;
                        }
                        if(!bankAgency){ 
                            alertInvalidFields.current.innerText = 'Informe o número da agência';
                            return;
                        }
                        if(!accountNumber){ 
                            alertInvalidFields.current.innerText = 'Informe o número da conta ';
                            return;
                        }
                        if(!valueTransfer ){ 
                            alertInvalidFields.current.innerText = 'Informe o valor da transferência';
                            return;
                        }
                        navigate("/completedTransfer")

                    }}

                >
                    <p className='alert-invalid-fields' ref={alertInvalidFields}></p>
                    <Input
                        type={'text'}
                        value={accountType}
                        onChange={e => {
                            setAccountType(e.target.value);
                        }}
                    >Tipo de conta</Input>

                    <Input
                        isDate={true}
                        value={transferDate}
                        onChange={e => {
                            setTransferDate(e.target.value);
                        }}
                    >Data de transferência</Input>

                    <Input
                        type={'number'}
                        value={bankAgency}
                        onChange={e => {
                            setbankAgency(e.target.value);
                        }}                      
                    >Agência (sem dígito)</Input>

                    <Input
                        type={'number'}
                        value={accountNumber}
                        onChange={e => {
                            setAccountNuber(e.target.value);
                        }}                 
                    >Conta (com dígito)</Input>

                    <Input
                        type={'number'}
                        value={valueTransfer}
                        onChange={e => {
                            setValueTransfer(e.target.value);
                        }}       
                    >Valor da transferência</Input>
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
        </>
    )

    return (
        formTransfer
    )
};

export default TransferPage;
