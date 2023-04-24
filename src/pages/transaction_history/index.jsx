import { useRef, useState, useEffect } from "react";
import Table from "../../components/Table";
import Button from "../../components/Button/Button";
import NavBar from "../../components/NavBar/NavBar";
import InfoCardComponent from "../../components/InfoCardComponent/InfoCardComponent";
import TopTitle from "../../components/TopTitle/TopTitle";
import { useNavigate } from "react-router-dom";

import "./styles.css";

const TransactionHistory = () => {
  document.title = 'Ímã Pay - Histórico de transações';

  const navigate = useNavigate();
  const [tableData, setTableData] = useState([]);
  const [error, setError] = useState ({});
  const [balanceData, setBalanceData] = useState({});

  
  useEffect(() => {
    const token = localStorage.getItem('token');
    const request = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', 'token': token },
    };
    fetch('https://imapayapi-production.up.railway.app/api/ImaPay/TransferHistory', request)
    .then((response) => {
        if (response.ok) {
          return response.json();
        }
        throw response;
    })
    .then(data => {
      let dataArray = []
      for (let i = 0; i < data.transactions.length; )
      {
        let innerDataArray = [];
        for (let j = 0; j < 5; j++, i++)
        {
          if (i > data.transactions.length) break;
          innerDataArray.push(data.transactions[i]);
        }
        if (i > data.transactions.length) break;
        dataArray.push(innerDataArray);
      }
      const table = [
        {
          hasCentralTitle: true,
          month: "Transações",
          head: {
            col1: "Data",
            col2: "Conta",
            col3: "Status",
            col4: "Valor"
          },
          body: data.transactions
        }];
        setTableData(table);
    })
    .catch((error) => {
        console.error("Error fetching data: ", error);
        setError(error);
    })
  }, [])
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
})

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
            value={balanceData.balance?.toFixed(2).replace("." , ",")}
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
