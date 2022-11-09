import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';
import './Service.css';

const Service = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(err => console.error(err))
    }, [])

    return (
        <div>
            <h1 className='text-5xl text-white service-title text-center my-6 hover:text-slate-400'>My Service</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-14'>
                {
                    services.map(service => <ServiceCard
                        key={service._id}
                        service={service}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Service;