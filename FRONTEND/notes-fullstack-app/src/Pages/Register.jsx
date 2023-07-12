import { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export const RegisterPage = () => {
    const [userInput, setUserInput] = useState({
        username:"",
        email:"",
        password:""
    });
    let navigate = useNavigate();

    const changeHandler = e => {
        const {name, value} = e.target;
        setUserInput({
            ...userInput,
            [name]: value
        })
    }
    const { username, email, password } = userInput;

    const submitHandler = e => {
        e.preventDefault();

        axios.post("http://localhost:3005/api/auth/register", {
            username: username,
            email: email,
            password: password
        })
        .then((res) => {
            console.log(res.data)
            setUserInput({
                username:"",
                email:"",
                password:""
            })
            alert("User has been registered!")
            navigate("/login")
        })
        .catch((err) => {
            console.log(err)
        })
    }

    return (
        <div className="register-div">
            <form onSubmit={submitHandler}>
                <h1>Register</h1>
                <input type="text" placeholder="Username" name="username" value={username} onChange={changeHandler} />
                <input type="text" placeholder="Email" name="email" value={email} onChange={changeHandler}/>
                <input type="password" placeholder="Password" name="password" value={password} onChange={changeHandler}/>
                <button>Register</button>
            </form>
        </div>
    )
}