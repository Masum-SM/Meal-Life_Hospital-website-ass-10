import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const MoreInfo = () => {
    let { serviceId } = useParams();

    const [serviceDetals, setServiceDetails] = useState([]);
    const [singleService, setSignleService] = useState({})
    useEffect(() => {
        fetch('/homedb.json')
            .then(res => res.json())
            .then(data => setServiceDetails(data))
    }, [])

    useEffect(() => {
        const foundServiceDetais = serviceDetals.find(sercice => sercice.id == serviceId)
        setSignleService(foundServiceDetais)
    }, [serviceDetals])

    return (
        <div className='col '>
            <div className=" card h-100 ">
                <div className='card-img'>
                    <img src={singleService?.img} className='card-img-top' alt="" />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{singleService?.name}</h5>
                    <p className="card-text"> {singleService?.description?.ds1} </p>
                    <p className="card-text"> {singleService?.description?.ds2} </p>
                    <p className="card-text"> {singleService?.description?.ds3} </p>
                    <p className="card-text"> {singleService?.description?.ds4} </p>
                    <p className="card-text"> {singleService?.description?.ds5} </p>
                </div>

            </div>


        </div>
        // <div>
        //     <h2>more info :{serviceId}</h2>
        //     <h3>{singleService?.name}</h3>
        //     <p>{singleService?.description.ds1}</p>
        // </div>
    );
};

export default MoreInfo;