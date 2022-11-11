import React from 'react';
import { Helmet } from 'react-helmet-async';
import toast from 'react-hot-toast';

const AddService = () => {
    const addService = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const img = form.img.value;
        const description = form.description.value;
        const price = form.price.value;
        const discount = form.discount.value;

        const addNewService = {
            name,
            img,
            discount,
            price,
            description
        }
        console.log(addNewService)
        fetch('http://localhost:5000/servicesAll', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addNewService)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    
                    toast.success('Add new service successfully')
                    form.reset();
                }
            })
            .catch(error => console.error(error))
    }
    return (
        <div>
            <Helmet>
                <title>AddService {`-- FlyTo-Grapher`}</title>
            </Helmet>

            <div className='w-3/4 mx-auto p-5 bg-sky-400 m-10 rounded-lg text-center'>
                <form onSubmit={addService} >
                    <h1 className='text-3xl work-title'>Add Service</h1>
                    <input name='name' type="text" placeholder="service-name" className="input input-bordered input-info w-full max-w-xs" required />
                    <input name='img' type="text" placeholder="service-Imgurl " className="m-1 input input-bordered input-info w-full max-w-xs" required />
                    <br />
                    <input name='price' type="number" placeholder="Price" className="m-1 input input-bordered input-info w-full max-w-xs" required />
                    <input name='discount' type="number" placeholder="discount" className="m-1 input input-bordered input-info w-full max-w-xs" required />
                    <br />
                    <textarea name='description' className="textarea textarea-error m-1 w-3/4" placeholder="description" required></textarea>
                    <br />
                    <button type='submit' className="btn btn-wide">Add New Service</button>
                </form>

            </div>
        </div>
    );
};

export default AddService;

