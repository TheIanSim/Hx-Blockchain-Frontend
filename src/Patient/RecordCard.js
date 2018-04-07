import React from 'react';

const recordCard = (props) => {

    const nameFormatter = (name) => {
        return name.split("#")[1];
    }

    const drugFormatter = (drug) => (
        <li key={drug}>{drug}</li>
    )

    return (
    <div className='PrescriptionCard'>
        <div>
            <p><b>Record ID:  </b>{props.data.infoId}</p>
            <h2><b>Owner:  </b>{nameFormatter(props.data.owner)}</h2>        
    
            <div className='RecordCardList'>
                <p><b>Drug Allergies:</b></p>
                <ul >
                    {props.data.drugAllergies.map(drugFormatter)}
                </ul>
            </div>
            
            <div className='RecordCardList'>
                <p><b>Lab Reports:</b></p>
                <ul >
                    {props.data.labReports.map(drugFormatter)}
                </ul>
            </div>

            <div className='RecordCardList'>
                <p><b>Test Images:</b></p>
                <ul >
                    {props.data.testImages.map(drugFormatter)}
                </ul>
            </div>
            
            

        </div>
    </div>
    );
}

export default recordCard;
