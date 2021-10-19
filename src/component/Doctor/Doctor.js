import React from 'react';
import './Doctor.css'
const Doctor = ({ doctor }) => {
    const { img, name, designation } = doctor;
    return (
        <div>
            <div className="col d-flex doctor">
                <div className="doctor-img">
                    <img src={img} alt="" />
                </div>
                <div className="doctor-contianer">
                    <h3>Name : {name}</h3>
                    <p> {designation} </p>
                </div>
            </div>
        </div>
    );
};

export default Doctor;