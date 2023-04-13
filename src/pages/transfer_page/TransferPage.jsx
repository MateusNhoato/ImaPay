import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import Button from '../../components/Button/Button';
import Form from '../../components/Form/Form';
import Input from '../../components/Input/Input';
import InfoCardComponent from '../../components/InfoCardComponent/InfoCardComponent';
import NavBar from '../../components/NavBar/NavBar';

import '../../App.css';
import './TransferPage.css'

const TransferPage = () => {
    document.title = 'Ímã Pay - Nova transferência';

    const navigate = useNavigate();

    const [transferDate, setTransferDate] = useState('');
    const [agency, setAgency] = useState('');
    const [account, setAccount] = useState('');
    const [transferAmount, setTransferAmount] = useState('');

    const alertInvalidFields = useRef();
    const dateInput = useRef();

    const formatBrazilianReal = num => {
        let realBR = num;
        realBR = (realBR/100).toFixed(2) + '';
        realBR = realBR.replace(".", ",");
        realBR = realBR.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
        return realBR;
    }


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
            <div className='transfer-page-container'>
                <NavBar items={items} />
                
                <div>
                    <div className="transfer-div">
                        <div className="transfer-title">Transferência bancária</div>
                    </div>
                    <Form
                        buttonValue={'Confirmar transferência'}
                        buttonWidth={'80%'}
                        hoverColor={'#111827'}
                        leaveColor={'#288484'}
                        gradient={false}
                        buttonFunction={event => {
                            event.preventDefault();
                            
                            if(!transferDate) {
                                alertInvalidFields.current.innerText = 'Informe uma data para transferência';
                                return;
                            }

                            if(!agency) {
                                alertInvalidFields.current.innerText = 'Informe o número da agência';
                                return;
                            }

                            if(agency.length < 7) {
                                alertInvalidFields.current.innerText = 'O número da agência precisa ter 7 dígitos!';
                                return;
                            }

                            if(!account) {
                                alertInvalidFields.current.innerText = 'Informe o número da conta';
                                return;
                            }

                            if(account.length < 6) {
                                alertInvalidFields.current.innerText = 'O número da conta precisa ter 5 dígitos!';
                                return;
                            }

                            if(!transferAmount) {
                                alertInvalidFields.current.innerText = 'Informe o valor da transferência';
                                return;
                            }

                            if(transferAmount.replace(/\D/g, '') <= 0) {
                                alertInvalidFields.current.innerText = 'O valor da transferência deve ser maior que zero!';
                                return;
                            }

                            alertInvalidFields.current.innerText = '';
                            navigate('/user/completedTransfer')

                        }}
                    >
                        <p className='alert-invalid-fields' ref={alertInvalidFields}></p>

                        <div className='choose-account'>
                            <div className='account-selector-box'>
                                <span>Escolha um tipo de conta:</span>
                            </div>
                            <div>
                                <select id="accounts">
                                    <option value="current-account">Conta corrente</option>
                                    <option value="savings-account">Conta poupança</option>                        
                                </select>
                            </div>
                        </div>
                        <Input 
                            ref={dateInput}
                            isDate={true}
                            value={transferDate}
                            onChange={e => {
                                setTransferDate(e.target.value);
                            }}
                        >Data de transferência</Input>
                        <Input 
                            value={agency}
                            onChange={e => {
                                if(/\d/.test(e.nativeEvent.data) || e.nativeEvent.data == null) {
                                    setAgency(e.target.value);
                                }
                            }}
                            maxlength={'7'}
                        >Agência (sem dígito)</Input>
                        <Input 
                            value={account}
                            onChange={e => {
                                if(/\d/.test(e.nativeEvent.data) || e.nativeEvent.data == null) {
                                    if(e.nativeEvent.data != null) {
                                        if(e.target.value.length == 4) {
                                            setAccount(`${e.target.value}-`);
                                        } else {
                                            setAccount(e.target.value);
                                        }
                                        if(e.target.value.length == 5) {
                                            const inputValue = e.target.value.split('');
                                            inputValue.splice(4, 0, '-');
                                            const input = inputValue.join('');
                                            setAccount(input);
                                        }
                                    } else {
                                        setAccount(e.target.value);
                                    }
                                }                            
                            }}
                            maxlength={'6'}
                        >Conta (com dígito)</Input>
                        <Input 
                            value={transferAmount}
                            onChange={e => {
                                const onlyNumbers = e.target.value.replace(/\D/g, '');
                                const formattedMoney = formatBrazilianReal(onlyNumbers);

                                setTransferAmount(`R$ ${formattedMoney}`);

                                if(e.nativeEvent.data == null) {
                                    if(e.target.value == 'R$ 0,0') {
                                        setTransferAmount('');
                                    }
                                }
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
            </div>
        </>
    )

    return (
        formTransfer
    )
};

export default TransferPage;
