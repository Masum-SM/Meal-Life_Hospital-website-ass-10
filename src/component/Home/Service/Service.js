import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'
const Service = ({ service }) => {
    const { id, name, img, description } = service;

    const { ds1, ds2, ds3, ds4, ds5 } = description
    return (
        <div className='col '>
            <div className=" card h-100 ">
                <div className='card-img'>
                    <img src={img} className='card-img-top' alt="" />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text"> {ds1} </p>
                    <p className="card-text"> {ds2} </p>
                    <p className="card-text"> {ds3} </p>
                    <p className="card-text"> {ds4} </p>
                    <p className="card-text"> {ds5} </p>
                </div>
                <Link to={`/moreInfo/${id}`}>
                    <button>More Information</button>
                </Link>
            </div>


        </div>
    );

}

export default Service;