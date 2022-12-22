import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logImg from '../../../assets/LoginRegister/login_img.jpg'
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import { Helmet } from 'react-helmet-async';

import './Login.css';

const Login = () => {

    const { userLogin, setLoader } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        userLogin(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(err => console.error(err))
            .finally(() => {
                setLoader(false)
            })
    }

    return (
        <div>
            <Helmet>
                <title>Login {`-- FlyTo-Grapher`}</title>
            </Helmet>
            <div className=" main-div my-4">
                <div className="hero-content flex-col lg:flex-row">

                    <img className='lg:w-2/4' src={logImg} alt="" />

                    <form onSubmit={handleSubmit} className="card flex-shrink-0 w-full max-w-sm shadow-2xl form-div">
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
        </div>
    );
};

export default Login;