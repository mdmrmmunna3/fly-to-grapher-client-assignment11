import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import ServiceCard from '../ServiceCard/ServiceCard';
import './Service.css';

const Service = () => {

    const { setLoader } = useContext(AuthContext)
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://fly-to-grapher-server-assignment11.vercel.app/services')
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(err => console.error(err))
    }, [])

    return (
        <div>

            {
                setLoader && <div>
                    <h1 className='text-5xl text-white service-title text-center my-6 hover:text-slate-400'>My Service</h1>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-2 md:mx-5 lg:mx-7'>
                        {
                            services.map(service => <ServiceCard
                                key={service._id}
                                service={service}
                            ></ServiceCard>)
                        }
                    </div>
                    <div className='text-center mt-4'>
                        <Link to='/serviceall'> <button className="btn btn-outline btn-primary border-0 text-white">See All <FaArrowRight></FaArrowRight></button></Link>
                    </div>
                </div>
            }
        </div>
    );
};

export default Service;