import React, { useState } from 'react'
import './Login.css'
import axios from 'axios'

const Login = (props) => {

    const [form, setForm] = useState({
        email: "",
        password: ""
    });

    const handleChange = (event) => {
        const { name, value } = event.target;

        setForm({ ...form, [name]: value });
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('http://localhost:5000/login', form)
            .then((res) => {
                console.log(res);
                const { data: { LoggedIn, user } } = res;
                if (LoggedIn) {
                    props.setUser(user.name);
                    console.log(user);
                }

            })
            .catch((err) => { console.error(err) });

    }

    return (
        <>
            <h1 style={{ textAlign: "center", marginTop: "5rem" }}>Login</h1>
            <form className='w-25  form-login' onSubmit={handleSubmit}>

                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" name="email" class="form-control" onChange={handleChange} id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" name="password" class="form-control" onChange={handleChange} id="exampleInputPassword1" />
                </div>


                <button type="submit" class="btn btn-info px-4">Login</button>
            </form>

        </>
    )
}

export default Login