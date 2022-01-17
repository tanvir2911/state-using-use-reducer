import React, { useReducer, useState } from 'react';
import { portalReducer } from '../reducers/portalReducer';
import { portalState } from '../store/portalStore';

const Portal = () => {
    const [state, dispatch]=useReducer(portalReducer,portalState);
    const [name, setName] = useState('');
    return (
        <div>
            <h2>My doctors Portal</h2>
            <h3>Has Patients: {state.patients.length}</h3>
            <input type="text" onChange={e=>setName(e.target.value)}/>
            <button onClick={()=>dispatch({type:'ADD_PATIENT', name:name})}>Add</button>
            <br/>
            <h3>------------------</h3>
            {
                state.patient.map(patient => <p
                key={patient.id}
                > 
                {patient.name} {patient.id}
                <button onClick={()=>dispatch({type:'REMOVE_PATIENT', id:patient.id})}>X</button>
                </p>)
            }
        </div>
    );
};

export default Portal;