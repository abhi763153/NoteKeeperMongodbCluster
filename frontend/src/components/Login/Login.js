import React from 'react'
import './Login.css'

const Login = () => {
    return (
        <>
            <h1 style={{ textAlign: "center", marginTop: "5rem" }}>Login</h1>
            <form className='w-25  form-login'>

                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" name="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" name="password" class="form-control" id="exampleInputPassword1" />
                </div>


                <button type="submit" class="btn btn-info px-4">Login</button>
            </form>

        </>
    )
}

export default Login