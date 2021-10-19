import React, { useEffect, useState } from 'react';
import Doctor from '../Doctor/Doctor';
import './Doctors.css'

const Doctors = () => {
    const [doctors, setDoctors] = useState([]);
    useEffect(() => {
        fetch('doctordb.json')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])
    return (
        <div className='doctors-container'>
            <h2 className='doctor-tilte'>Doctors Information</h2>
            <div className='doctors-container'>
                <div className='row row-cols-1 row-cols-md-2 '>
                    <div className="col">
                        <div className="row chairman">
                            <div className="col-12 col-lg-6 chairman-img">
                                <img src="images/doctors/dc1.jpg" alt="" />
                            </div>
                            <div className="col-12 col-lg-6 doctor-description">
                                <h3>Name : Salam Ranham</h3>
                                <h4>Chairman</h4>
                                <p>Depertment : Cardiology</p>
                                <small>Meal Life Hospital ratings for cardiology and heart surgery. U.S. News evaluated 592 hospitals and ranked the top 50 that care for patients with challenging heart and vascular cases including heart transplants, implantation of cardiac devices such as pacemakers</small>
                            </div>
                        </div>
                    </div>


                    <div className="col">

                        <div className="row chairman">
                            <div className="col-12 col-lg-6 chairman-img">
                                <img src="images/doctors/dc2.jpg" alt="" />
                            </div>
                            <div className="col-12 col-lg-6 doctor-description">
                                <h3>Name : Humayra Habib</h3>
                                <h4>Chairman</h4>
                                <p>Depertment : Neurosurgery</p>
                                <small>Meal Life Hospital rankings for neurology and neurosurgery. U.S. News evaluated 1,248 hospitals and ranked the top 50 that treat many challenging neurological patients for brain hemorrhage, conditions affecting the central nervous system</small>
                            </div>
                        </div>

                    </div>
                    <div className="col">
                        <div className="row chairman">
                            <div className="col-12 col-lg-6 chairman-img">
                                <img src="images/doctors/dc3.jpg" alt="" />
                            </div>
                            <div className="col-12 col-lg-6 doctor-description">
                                <h3>Name : Abdullah Muhaimin</h3>
                                <h4>Chairman</h4>
                                <p>Depertment : Hepatology</p>
                                <small>The Vanderbilt Hepatology and Liver Transplant Center is the largest program of its kind in Tennessee. Experts in all areas of liver disease participate in the evaluation, management, treatment and follow-up of our patients including options for transplantation.</small>
                            </div>
                        </div>

                    </div>
                    <div className="col">
                        <div className="row chairman">
                            <div className="col-12 col-lg-6 chairman-img">

                                <img src="images/doctors/dc4.jpg" alt="" />

                            </div>
                            <div className="col-12 col-lg-6 doctor-description">
                                <h3>Name : Unus Masum</h3>
                                <h4>Chairman</h4>
                                <p>Depertment : Gastroenterology</p>
                                <small>Meal Life Hospital ratings for gastroenterology and GI surgery. U.S. News evaluated 1,584 hospitals and ranked the top 50 that treat many challenging patients for stomach, esophageal, digestive, pancreatic, liver, colon, bowel and rectal procedures</small>
                            </div>
                        </div>

                    </div>
                </div>

            </div>

            <div className='row row-cols-1 row-cols-md-2 g-4'>
                {
                    doctors.map(doctor => <Doctor
                        key={doctor.id}
                        doctor={doctor}
                    ></Doctor>)
                }

            </div>
        </div>
    );
};

export default Doctors;
