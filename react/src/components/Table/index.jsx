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
              const signal = col.value4.trim().charAt(0);
              const cond1 = props.hasCentralTitle && signal == "+";
              const cond2 = props.hasCentralTitle && signal == "-";
              const color = cond1 ? "green" : cond2 ? "red" : "";

              return (
                <>
                  <tr>
                    <td>{col.value1}</td>
                    <td>{col.value2}</td>
                    <td>
                      <span>{col.value3}</span>
                    </td>
                    <td>
                      <span style={{ color }}>{col.value4}</span>
                    </td>
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
