import React from 'react';
import { Link } from 'react-router-dom';
import logImg from '../../../assets/LoginRegister/login_img.jpg'
import './Login.css';

const Login = () => {
    return (
        <div className=" main-div my-4">
            <div className="hero-content flex-col lg:flex-row">

                <img className='w-2/4' src={logImg} alt="" />

                <form className="card flex-shrink-0 w-full max-w-sm shadow-2xl form-div">
                    <h1 className="text-5xl font-bold text-center text-white mt-4">Login now!</h1>
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Email</span>
                            </label>
                            <input name='email' type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Password</span>
                            </label>
                            <input name='password' type="password" placeholder="password" className="input input-bordered" required />

                        </div>
                        <div className="form-control mt-6">
                            <input className='btn btn-primary' type="submit" value="Login" />
                        </div>
                    </div>
                    <p className='text-center text-white mb-6'>Have an Account? <Link to='/signup' className='text-orange-600 font-bold'>Sing Up</Link> </p>
                </form>
            </div>
        </div>
    );
};

export default Login;