import "./styles.css";


const Table = ({ props }) => {
  return (
    <>
      <div class="table-box">
        <table>
          {props.hasCentralTitle && (
            <tr>
              <th class="monthYearTransaction" colspan="4">
                {props.month}
              </th>
            </tr>
          )}

          <tr>
            <th>{props.head.col1}</th>
            <th>{props.head.col2}</th>
            <th>{props.head.col3}</th>
            <th>{props.head.col4}</th>
          </tr>
          <tbody>
            {props.body.map(col => {
                const accountNumber = `${col.account?.slice(0,4)}-${col.account?.slice(-1)}`;
                const signal = Number(col.valueTransaction);
                const color = signal>0 ? "green" : "red";
                const valueTransaction = `R$ ${col.valueTransaction?.toFixed(2)}`.replace('.',',');
      
                const dataHora = new Date(col.date);
                const opcoes = { timeZone: 'America/Sao_Paulo' };
                const dataHoraFormatada = dataHora.toLocaleString('pt-BR', opcoes).replace(',','').slice(0,10);
  
                return (
                  <>
                    <tr>
                      <td>{dataHoraFormatada}</td>
                      <td>{accountNumber}</td>
                      <td>{col.status}</td>
                      <span style={{ color }}>{valueTransaction}</span>
                    </tr>
                  </>
                );
              })
            }
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
