import React from 'react';

const navigation = (props) => {

    return (
    <div>
        <img src="http://sweetclipart.com/multisite/sweetclipart/files/health_legal_caduceus_logo_lineart.png" className='nav-logo' />
        <h1>Navigation</h1>
        <ul>
            <li onClick={() => props.click(props.routes.permissions, 'permissions')} className={props.cur === 'permissions'? 'active' : null}>Permissions</li>
            <li onClick={() => props.click(props.routes.prescriptions, 'prescriptions')} className={props.cur === 'prescriptions'? 'active' : null}>Prescriptions</li>
            <li onClick={() => props.click(props.routes.medicalcert, 'medicalcert')} className={props.cur === 'medicalcert'? 'active' : null}>Medical Certificates</li>
            <li>Medical Records</li>
            <li>Personal Details</li>
            <li onClick={props.out}>Log-Out</li>
        </ul>
    </div>
    );
}
  


export default navigation;
