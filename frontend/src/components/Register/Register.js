import React, { useState } from 'react';
import './Register.css';
import axios from 'axios';
import Alerts from '../Alerts/Alerts'

const Register = () => {

    const [form, setForm] = useState({
        name: "",
        email: "",
        password: ""
    })

    const [showNotification, setShowNotification] = useState(false);
    const [message, setMessage] = useState("");
    const [color, setColor] = useState("");

    const handleChange = (event) => {
        const { name, value } = event.target;

        setForm({ ...form, [name]: value });

    }

    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('http://localhost:5000/register', form)
            .then((res) => {

                const { data: { message, isUserAlreadyExist } } = res;

                if (isUserAlreadyExist) {
                    setShowNotification(true);
                    setMessage(message);
                    setColor("danger");
                }
                else {
                    setShowNotification(true);
                    setMessage(message);
                    setColor("success");
                }

                console.log(res)
            })
            .catch((err) => { console.error(err) });

        setShowNotification(true);

        setTimeout(() => {
            setShowNotification(false);
        }, 3000);
    }



    return (
        <>
            {showNotification && <Alerts message={message} color={color} />}

            <h1 style={{ textAlign: "center", marginTop: "1rem" }}>Register</h1>
            {/* {form.name + " " + form.email + " " + form.password} */}
            <form className='w-25  form-register' onSubmit={handleSubmit}>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Your Name</label>
                    <input type="text" name="name" onChange={handleChange} class="form-control" id="exampleInputName" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" name="email" onChange={handleChange} class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" name="password" onChange={handleChange} class="form-control" id="exampleInputPassword1" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" name="cpassword" onChange={handleChange} class="form-control" id="exampleInputCpassword1" />
                </div>

                <button type="submit" class="btn btn-info px-4">Register</button>
            </form>


        </>
    )
}

export default Register