import React from 'react';
import './InfoCardComponent.css';

const InfoCardComponent = (props) => {
    console.log(props.value);
    return (
        <div>
            <div className="infoCard">
                <p className="infoCardTitle">{props.title}</p>
                <div className='InfoCardText'>
                    <div className="infoCardDollarSign">R$</div>
                    <div className='InfoCardText'>{props.value}</div>
                </div>
            </div>
        </div>
    )
}

export default InfoCardComponent;