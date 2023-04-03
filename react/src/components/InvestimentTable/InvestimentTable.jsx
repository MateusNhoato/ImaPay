import React from 'react';

import './InvestimentTable.css';

const InvestimentTable = props => {
    return (
        <>
            <h2>Investimentos</h2>
            <table>
                <thead>
                    <tr>
                        <th>Tipo</th>
                        <th>Data</th>
                        <th>Detalhes</th>
                        <th>Rendimento</th>
                    </tr>
                </thead>

                {
                    props.investimentData.map(item => {
                        return (
                            <tr>
                                <td>{item.type}</td>
                                <td>{item.date}</td>
                                <td>{item.details}</td>
                                <td>{item.performance}</td>
                            </tr>
                        )
                    })
                }                
            </table>
        </>
    )
}

export default InvestimentTable;