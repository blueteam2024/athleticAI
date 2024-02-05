import { useRef, useState, useContext } from 'react';
import axios from '../api/axios';
import {AuthContext} from '../context/AuthContext';
import {useNavigate} from 'react-router-dom';
const LOGIN_URL = '/api/users/login';

const Login = () => {
    const userRef = useRef();
    const errRef = useRef();
    const { login } = useContext(AuthContext);
    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await axios.post(LOGIN_URL,
                { username: user, password: pwd });
            console.log('Response status:', response.status);
            console.log(response.data.message);

            if (response.status === 200) {
                login();
                setUser('');
                setPwd('');
                navigate('/home');


            } else {
                setErrMsg('Login Failed');
            }
        }
        catch (e) {
            console.error('Error during login:', e);
            setErrMsg('An error occurred during login.');
        }

    }

    return (
        <section >
            <p ref={errRef} className={errMsg ? "errmsg text-danger" : "offscreen"} aria-live="assertive">{errMsg}</p>
            <h1 style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>Login</h1>
            <h1 className="text-white">.</h1>
            <form  onSubmit={handleSubmit}>
                {/* Username input */}
                <div className="form-outline mb-4">
                    <label htmlFor="username" className="form-label ">Username:</label>
                    <input
                        type="text"
                        id="username"
                        ref={userRef}
                        autoComplete="off"
                        onChange={(e) => setUser(e.target.value)}
                        value={user}
                        required
                    />
                </div>
                {/* Password input */}
                <div className="form-outline mb-4">

                    <label htmlFor="password" className="form-label">Password:</label>
                    <input
                        type="password"
                        id="password"
                        autoComplete="off"
                        onChange={(e) => setPwd(e.target.value)}
                        value={pwd}
                        required
                    />
                </div>
            </form>

        </section>
    )
}

export default Login