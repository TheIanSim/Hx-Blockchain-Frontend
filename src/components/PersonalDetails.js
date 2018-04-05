import React from 'react';
import avatar from '../images/img_avatar.png'

const personalDetails = (props) => {

    const pd = props.pd;

    let info = [];
    Object.keys(pd.info).forEach( (k) => {
    info.push(<li key={k}>{k}: <b>{pd.info[k]}</b></li>);
    })

    return (
    <div>
        <img src={avatar} alt="https://www.w3schools.com/howto/img_avatar.png" className='avatar' />
        <h1>{pd.firstname} <b>{pd.lastname}</b></h1>
        <h2>{pd.role}</h2>
        <ul>
            {info}
        </ul>
        <div className="PersonalDetails-btn" onClick={props.editInfo}>
            <h2>EDIT INFO</h2>
        </div>
    </div>
    );
}

export default personalDetails;
