import React from 'react';

import './InvestimentTable.css';

const InvestimentTable = props => {
    return (
        <>
            <div className='investiment-table-box'>
                <h2 className='title-investments'>Investimentos</h2>
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
            </div>
        </>
    )
}

export default InvestimentTable;