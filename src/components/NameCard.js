import React from 'react';

const nameCard = (props) => {
    return (
    <div className='NameCard'>
        <div>
            <h2>{props.name}</h2>
            <h3>{props.role}</h3>
        </div>
        <button className='NameCard-btn' disabled="disabled">Remove</button>
    </div>
    );
}

export default nameCard;
