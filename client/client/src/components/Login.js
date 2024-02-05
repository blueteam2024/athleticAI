import { useRef, useState, useEffect } from 'react';
import axios from '../api/axios';
import {useNavigate} from 'react-router-dom';
const LOGIN_URL = '/api/users/login';

const Login = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const navigate = useNavigate();
    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            const response = await axios.post(LOGIN_URL,
                { username: user, password: pwd });
            console.log('Response status:', response.status);
            console.log(response.data.message);

            if (response.status === 200) {
                setUser('');
                setPwd('');
                navigate('/home');


            } else {
                setErrMsg('Login Failed');
                errRef.current.focus();
            }
        }
        catch (e) {
            console.error('Error during login:', e);
            setErrMsg('An error occurred during login.');
        }

    }

    return (<>

        </>
    )
}

export default Login