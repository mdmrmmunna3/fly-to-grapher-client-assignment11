import React, { useContext } from 'react';
import { FaGoogle } from 'react-icons/fa';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const SocalLogin = () => {
    const { googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate("/")
            })
            .catch(err => console.error(err))
    }
    return (
        <div>
            <button onClick={handleGoogleSignIn} className="btn btn-outline btn-success w-full"> <span className='mr-2'>Sign Up With Google</span> <FaGoogle></FaGoogle> </button>
        </div>
    );
};

export default SocalLogin;