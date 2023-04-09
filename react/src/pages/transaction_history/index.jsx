import { useRef } from "react";
import Table from "../../components/Table";
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
    ],
  },
];

const TransactionHistory = () => {
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

  return (
    <>
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
    </>
  );
};

export default TransactionHistory;
