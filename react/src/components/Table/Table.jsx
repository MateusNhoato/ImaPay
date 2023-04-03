import React from 'react';

import Title from '../Title/Title.jsx';
import './Table.css';

const Table = () => {
    return (
        <>
            <Title />
            <table>
                <tr>
                    <th>Tipo</th>
                    <th>Data</th>
                    <th>Detalhes</th>
                    <th>Rendimento</th>
                </tr>
                <tr>
                    <td>CDI</td>
                    <td>10/02/2022</td>
                    <td>Rendendo acima da margem</td>
                    <td>1,9% ao mês</td>
                </tr>
                <tr>
                    <td>CDI</td>
                    <td>10/03/2022</td>
                    <td>Rendendo acima da margem</td>
                    <td>1,9% ao mês</td>
                </tr>
                <tr>
                    <td>CDI</td>
                    <td>10/05/2022</td>
                    <td>Rendendo acima da margem</td>
                    <td>1,9% ao mês</td>
                </tr>
                <tr>
                    <td>CDI</td>
                    <td>10/08/2022</td>
                    <td>Rendendo acima da margem</td>
                    <td>1,9% ao mês</td>
                </tr>
            </table>
        </>
    )
}

export default Table;