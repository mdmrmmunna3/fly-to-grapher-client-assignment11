import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import logImg from '../../../assets/LoginRegister/signup_img.jpg'
import { AuthContext } from '../../../Contexts/AuthProvider/AuthProvider';
import SocalLogin from '../../SocalLogin/SocalLogin';


const SignUp = () => {

    const { user,createUser} = useContext(AuthContext);

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        createUser(email, password)
        .then(result => {
            const user = result.user;
            console.log(user);
        })
        .catch(err => console.error(err));
    }

    return (
        <div className=" main-div my-4">
            <div className="hero-content flex-col lg:flex-row">

                <img className='w-3/5' src={logImg} alt="" />

                <form onSubmit={handleSubmit} className="card flex-shrink-0 w-full max-w-sm shadow-2xl form-div">
                    <h1 className="text-5xl font-bold text-center text-white mt-4">Sign Up</h1>
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">Name</span>
                            </label>
                            <input name='name' type="text" placeholder="name" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text text-white">photoURL</span>
                            </label>
                            <input name='photoURL' type="text" placeholder="photoURL" className="input input-bordered" />
                        </div>

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
                            <SocalLogin></SocalLogin>
                            <br />
                            <input className='btn btn-primary' type="submit" value="Sign Up" />
                        </div>
                    </div>
                    <p className='text-center text-white mb-6'>Already Have an account? <Link to='/login' className='text-orange-600 font-bold'>LogIn</Link> </p>
                </form>
            </div>
        </div>
    );
};

export default SignUp;