import React from 'react';
import avatar from '../images/img_avatar.png'

const personalDetails = (props) => {
    return (
    <div>
        <img src={avatar} alt="https://www.w3schools.com/howto/img_avatar.png" className='avatar' />
        <h1>{props.details.firstname} <b>{props.details.lastname}</b></h1>
        <ul>
            <li>age: <b>{props.details.age}</b></li>
            <li>gender: <b>{props.details.gender}</b></li>
            <li>height: <b>{props.details.height}</b> cm</li>
            <li>weight: <b>{props.details.weight}</b> kg</li>
        </ul>
    </div>
    );
}

export default personalDetails;
