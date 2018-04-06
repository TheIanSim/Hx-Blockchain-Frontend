import React from 'react';

const MCCard = (props) => {
    const class_n = (props.data.fulfilled? <div className='fulfilled'><h1>FULFILLED</h1></div> : null)
    return (
    <div className='PrescriptionCard'>
        <div>
            <h2><b>Issuer:</b> {props.data.issuer_name} ({props.data.issuer_ID})</h2>
            <p><b>Issued: </b> {props.data.issue_date}</p>
            <p><b>Duration: </b>{props.data.duration}</p>
            <p><b>Remarks: </b> {props.data.remarks}</p>
        </div>
        {class_n}
    </div>
    );
}

export default MCCard;
