import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';

import ServicesAllCard from './ServicesAllCard';

const ServicesAll = () => {
    const {setLoader} = useContext(AuthContext)
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('https://fly-to-grapher-server-assignment11.vercel.app/servicesAll')
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(err => console.error(err))
    }, [])
    return (
        <div>
            {
                setLoader && <><h1 className='text-5xl text-black service-title text-center my-6 hover:text-slate-400'>My Service</h1>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-14'>
                        {
                            services.map(service => <ServicesAllCard
                                key={service._id}
                                service={service}
                            ></ServicesAllCard>)
                        }
                    </div></>
            }

        </div>
    );
};

export default ServicesAll;