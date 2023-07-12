import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import PropTypes from 'prop-types';

export const LoginPage = ({ setUser }) => {
    const [userInput, setUserInput] = useState({
        email: "",
        password:""
    })
    let navigate = useNavigate();

    const changeHandler = e => {
        const { name, value} = e.target;
        setUserInput({
            ...userInput,
            [name]: value
        })
    }
    const {email, password} = userInput;

    const submitHandler = e => {
        e.preventDefault();

        axios
            .post("http://localhost:3005/api/auth/login", {
                email: email,
                password: password
        })
            .then((res) => {
                setUser(res.data);
                navigate("/")
            })
            .catch ((error) => {
                alert(error.response.data)
        })
        setUserInput({
            email:"",
            password:""
        })
    }

    return (
        <div className="login-div">
            <form onSubmit={submitHandler}>
                <h1>Login</h1>
                <input type="text" placeholder="Email" name="email" value={email} 
                onChange={changeHandler} />
                <input type="password" placeholder="Password" name="password" value={password} onChange={changeHandler} />
                <button>Login</button>
            </form>
        </div>
    )
}

LoginPage.propTypes = {
    setUser: PropTypes.func
}