import React from 'react';

const editInfo = (props) => {

    const pd = props.pd;

    let info = [];
    Object.keys(pd.info).forEach( (k) => {
    info.push(<li>{k}: <b>{pd.info[k]}</b></li>);
    })

    return (
    <div>
        <h1>Edit Personal Details</h1>
        <div className='EditInfo'>
            <h1>{pd.firstname}</h1>
            <h1>{pd.lastname}</h1>
            <h2>{pd.role}</h2>
            <ul>
                {info}
            </ul>
        </div>
        <div className="EditInfo-btn">
            <h2>CONFIRM</h2>
        </div>
    </div>
    );
}

export default editInfo;
