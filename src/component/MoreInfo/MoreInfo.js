import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const MoreInfo = () => {
    let { serviceId } = useParams();
    const [serviceDetals, setServiceDetails] = useState([]);
    useEffect(() => {
        fetch('/homedb.json')
            .then(res => res.json())
            .then(data => setServiceDetails(data))
    }, [])
    console.log(serviceDetals)
    useEffect(() => {
        const foundServiceDetals = serviceDetals.find(service => service.id === serviceId)
        console.log(foundServiceDetals)
    }, [serviceDetals])

    return (
        <div>
            <h2>more info :{serviceId}</h2>
        </div>
    );
};

export default MoreInfo;