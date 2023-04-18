import { useRef } from "react";
import Table from "../../components/Table";
import Button from "../../components/Button/Button";
import NavBar from "../../components/NavBar/NavBar";
import InfoCardComponent from "../../components/InfoCardComponent/InfoCardComponent";
import TopTitle from "../../components/TopTitle/TopTitle";
import { useNavigate } from "react-router-dom";


import "./styles.css";

const tableData = [
  {
    hasCentralTitle: true,
    month: "Janeiro / 2023",
    head: {
      col1: "Data",
      col2: "Descrição",
      col3: "Status",
      col4: "Valor",
    },
    body: [
      {
        value1: "02/01/2023",
        value2: "Transferência enviada",
        value3: "Falha",
        value4: "- R$ 2.000,00",
      },
      {
        value1: "05/01/2023",
        value2: "Pagamento de conta",
        value3: "Concluída",
        value4: "- R$ 350,00",
      },
      {
        value1: "10/01/2023",
        value2: "Compra de material de escritório",
        value3: "Concluída",
        value4: "- R$ 150,00",
      },
      {
        value1: "15/01/2023",
        value2: "Depósito em conta",
        value3: "Concluída",
        value4: "+ R$ 5.000,00",
      },
      {
        value1: "20/01/2023",
        value2: "Compra de passagens aéreas",
        value3: "Pendente",
        value4: "- R$ 1.500,00",
      },
      {
        value1: "10/01/2023",
        value2: "Pagamento de boleto",
        value3: "Concluída",
        value4: "- R$ 150,00",
      },
      {
        value1: "13/01/2023",
        value2: "Recarga de celular",
        value3: "Falha",
        value4: "- R$ 20,00",
      },
      {
        value1: "15/01/2023",
        value2: "Compra",
        value3: "Pendente",
        value4: "- R$ 300,00",
      },
      {
        value1: "20/01/2023",
        value2: "Transferência enviada",
        value3: "Concluída",
        value4: "- R$ 50,00",
      },
      {
        value1: "22/01/2023",
        value2: "Compra",
        value3: "Concluída",
        value4: "- R$ 45,00",
      },
    ],
  },

  {
    hasCentralTitle: true,
    month: "Fevereiro / 2023",
    head: {
      col1: "Data",
      col2: "Descrição",
      col3: "Status",
      col4: "Valor",
    },
    body: [
      {
        value1: "15/02/2023",
        value2: "Recarga de celular",
        value3: "Processando",
        value4: "- R$ 15,00",
      },
      {
        value1: "17/02/2023",
        value2: "Compra",
        value3: "Revertida",
        value4: "- R$ 278,00",
      },
      {
        value1: "23/02/2023",
        value2: "Transferência recebida",
        value3: "Concluída",
        value4: "+ R$ 790,00",
      },
      {
        value1: "25/02/2023",
        value2: "Compra",
        value3: "Revertida",
        value4: "- R$ 20,00",
      },
      {
        value1: "27/02/2023",
        value2: "Transferência enviada",
        value3: "Concluída",
        value4: "- R$ 80,00",
      },
      {
        value1: "25/02/2023",
        value2: "Pagamento de conta",
        value3: "Pendente",
        value4: "- R$ 100,00",
      },
      {
        value1: "28/02/2023",
        value2: "Transferência recebida",
        value3: "Concluída",
        value4: "+ R$ 500,00",
      },
      {
        value1: "30/02/2023",
        value2: "Compra",
        value3: "Revertida",
        value4: "- R$ 75,00",
      },
      {
        value1: "02/02/2023",
        value2: "Depósito em conta",
        value3: "Concluída",
        value4: "+ R$ 1.000,00",
      },
      {
        value1: "05/02/2023",
        value2: "Transferência enviada",
        value3: "Falha",
        value4: "- R$ 200,00",
      }
    ],
  },



  {
    hasCentralTitle: true,
    month: "Março / 2023",
    head: {
      col1: "Data",
      col2: "Descrição",
      col3: "Status",
      col4: "Valor",
    },
    body: [
      {
        value1: "04/03/2023",
        value2: "Recarga de celular",
        value3: "Concluída",
        value4: "- R$ 25,00",
      },
      {
        value1: "18/03/2023",
        value2: "Transferência recebida",
        value3: "Concluída",
        value4: "+ R$ 9.560,00",
      },
      {
        value1: "04/03/2023",
        value2: "Recarga de celular",
        value3: "Concluída",
        value4: "- R$ 25,00",
      },
      {
        value1: "18/03/2023",
        value2: "Transferência recebida",
        value3: "Concluída",
        value4: "+ R$ 9.560,00",
      },
      {
        value1: "10/03/2023",
        value2: "Pagamento de boleto",
        value3: "Concluída",
        value4: "- R$ 150,00",
      },
      {
        value1: "13/03/2023",
        value2: "Recarga de celular",
        value3: "Falha",
        value4: "- R$ 20,00",
      },
      {
        value1: "15/03/2023",
        value2: "Compra",
        value3: "Pendente",
        value4: "- R$ 300,00",
      },
      {
        value1: "20/03/2023",
        value2: "Transferência enviada",
        value3: "Concluída",
        value4: "- R$ 50,00",
      },
      {
        value1: "22/03/2023",
        value2: "Compra",
        value3: "Concluída",
        value4: "- R$ 45,00",
      },
    ],
  }];

const TransactionHistory = () => {
  document.title = 'Ímã Pay - Histórico de transações';

  const navigate = useNavigate();
  const tableSlide = useRef();
  let scrollPosition = 0;

  const previousTable = () => {
    scrollPosition -= tableSlide.current.offsetWidth;
    tableSlide.current.scrollLeft = scrollPosition;
  };

  const nextTable = () => {
    scrollPosition += tableSlide.current.offsetWidth;
    tableSlide.current.scrollLeft = scrollPosition;
  };

  const items = [<Button
    label={'Saldo'}
    width={''}
    backgroundColor={'#111827'}
    click={() => navigate('/user/balance')}
    hoverColor={'var(--secondary-color)'}
    leaveColor={'var(--primary-color)'}/>,

    <Button
    label={'Transferência bancária'}
    width={''}
    backgroundColor={'#111827'}
    click={() => navigate('/user/transfer')}
    hoverColor={'var(--secondary-color)'}
    leaveColor={'var(--primary-color)'}/>
];

  return (
    <>
      <div className="transaction-history-container">
        <NavBar items={items} />
        <div className="info-container">
        <TopTitle
                  title='Seja bem-vindo(a)!'
                  subtitle='Histórico de Transações:'
              />

        <InfoCardComponent
                      title='Conta corrente'
                      value='5.472,00'
                  />
        </div>
        

        <div class="table-container">
          <svg
            class="btn-back-table"
            onClick={previousTable}
            xmlns="http://www.w3.org/2000/svg"
            height="48"
            viewBox="0 96 960 960"
            width="48"
          >
            <path d="M561 816 320 575l241-241 43 43-198 198 198 198-43 43Z" />
          </svg>
          <svg
            class="btn-advance-table"
            onClick={nextTable}
            xmlns="http://www.w3.org/2000/svg"
            height="48"
            viewBox="0 96 960 960"
            width="48"
          >
            <path d="m375 816-43-43 198-198-198-198 43-43 241 241-241 241Z" />
          </svg>
          <div class="table-slide" ref={tableSlide}>
            {tableData.map(item => {
              return <Table props={item} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default TransactionHistory;
