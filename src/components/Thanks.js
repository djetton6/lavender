import React, {useContext} from 'react';
import {useParams, useHistory} from 'react-router-dom';

const Thanks = () => {

    const history = useHistory();
    const { name } = useParams();


    return (
        <React.Fragment>
            <div className="thanks">
                <p>Thanks <strong>{name}</strong></p>
                <p>You joined {history.location.state}</p>


                <hr/>
                <p>WE will send you some more info when we launch</p>
            </div>
        </React.Fragment>
    )
}

export default Thanks;

