import React from 'react';
import './About.css'

const About = () => {
    return (
        <div>
            <h2 className='about-title'>About Meal Life Hospital</h2>
            <div className="row about-header">
                <div className="col-12 col-lg-6 about-img">
                    <img src="images/cover-1.png" alt="" />
                </div>
                <div className="col-12 col-lg-6 about-info">
                    <p> As our community’s public health system, Meal Life Hospital is the foundation for a healthy Dallas.</p>

                    <p>That’s why we ask ourselves every day, how can we better serve our patients?</p>

                    As Meal Life Hospital adds more services into the neighborhoods that need us most, we know that how we treat each and every patient affects the health and well-being of our entire community.

                    <p>Patient care is more than our job. It is our passion.</p>
                </div>
            </div>
            <div className='about-body'>
                <div className="row p-3">
                    <div className="col-12 col-lg-6  ">
                        <div className='features-container'>
                            <div className="mandate text-start">
                                <h3 className='about-features'>Mandate</h3>
                                <hr className='line ' />
                                <p>To furnish medical aid and hospital care to indigent and needy persons residing in the hospital district.</p>
                            </div>
                            <div className="mission text-start">
                                <h3 className='about-features'>Mission</h3><hr className='line' />
                                <p>Dedicated to the health and well-being of individuals and communities entrusted to our care.</p>
                            </div>
                            <div className="vission text-start">
                                <h3 className='about-features'>Vission</h3>
                                <hr className='line ' />
                                <p>By our actions, we will define the standards of excellence for public academic health system.</p>
                            </div>
                            <div className="values text-start">
                                <h3 className='about-features'>Meal Life Hospital's Values</h3>
                                <hr className='line' />
                                <p>At Parkland, our goal is to provide the best possible care for our patients through compassion, skill and teamwork. With that in mind, we’ve created CIRCLES, principles that guide our actions and interactions.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4 list-section mt-t">
                        <div className="doccuments d-flex align-item-center justify-content-center">
                            <ul className="list-group">


                                <li className="list-group-item list-group-item-primary text-uppercase bg-secondary fs-3 text">Medical Excellence</li>
                                <li className="list-group-item list-group-item-secondary">Cardiology"</li>
                                <li className="list-group-item list-group-item-success">Neurology</li>
                                <li className="list-group-item list-group-item-danger">Orthopedics</li>
                                <li className="list-group-item list-group-item-warning">Gestroenterology</li>
                                <li className="list-group-item list-group-item-light">General Surgery</li>

                            </ul>
                        </div>
                        <div className="doccuments d-flex align-item-center justify-content-center mt-5">
                            <ul className="list-group">
                                <li className="list-group-item text-uppercase bg-secondary fs-4 text">Related Documents</li>
                                <li className="list-group-item">More about RedBird Health Center</li>
                                <li className="list-group-item">Community Health Needs Assessment 2019</li>
                                <li className="list-group-item">Meal Life Hospital Annual Brochure FY20</li>
                                <li className="list-group-item">Meal Life Hospital Annual Report FY20</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="patient-care">
                <h3 className='fw-bolder fs-2'>Patient Care</h3>
                <p className='fw-bold' >Vanderbilt faculty and trainees served over 690,000 outpatients and admitted more than 20,000 patients in the last year.</p>
                <p>We are offering patients novel treatments such as gene-directed chemotherapy for cancer and heart, lung, kidney, and liver transplants. Our clinical work and research studies are designed to improve human health through an increasingly personalized approach, and the Department’s Quality Council is implementing new strategies aimed at reducing fragmentation of care and improving communication among healthcare professionals. Improved patient outcomes reflect the quality of our systems, outstanding teamwork, and effective engagement with patients, caregivers, and our community.</p>
            </div>
            <div className="future">
                <h3 className='fw-bolder fs-2'>The Future</h3>
                <p className='fw-bold' >We are constantly adapting as we rise to meet new challenges.</p>
                <p>Economic forces such as changes to reimbursement for healthcare and pressures on federal research funding compel us to remain innovative in our efforts to maintain excellence while continuing to reshape healthcare paradigms through discovery and translation. We have responded by strategically recruiting the best people, by diversifying our research funding portfolio, by investing in leadership development for our faculty and trainees, and by honing our systems.</p>
            </div>
        </div>
    );
};

export default About;