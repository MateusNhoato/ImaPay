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
          </tr>
          <tbody>
            {props.body.map(col => {
              const signal = Number(col.valueTransaction);
              const color = signal>0 ? "green" : "red";

              return (
                <>
                  <tr>
                    <td>{col.date}</td>
                    <span style={{ color }}>{col.valueTransaction}</span>
                  </tr>
                </>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
