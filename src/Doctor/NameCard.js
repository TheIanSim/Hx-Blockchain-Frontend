import React from 'react';

const nameCard = (props) => {
    return (
    <div className='NameCard'>
        <div>
            <h2>{props.name}</h2>
            <h3>{props.role}</h3>
        </div>
    </div>
    );
}

export default nameCard;
