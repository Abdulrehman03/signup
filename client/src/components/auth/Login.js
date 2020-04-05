import React, { Fragment, useState } from 'react';


export const Login = () => {

    const [formData, setFormData] = useState({
       
        email: '',
        password: ''
    })
    const {  email, password } = formData;
    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value })
    const onSubmit = e => {
        e.preventDefault();
      
            console.log("Success")
    }

    return (
        <div>
            <h1>Login Form</h1><br />
            <form action="" onSubmit={e => onSubmit(e)}>
                <input type="email" placeholder="Enter Email" name="email" value={email} onChange={e => onChange(e)} />
                <input type="password" placeholder="Enter Password" name="password" value={password} onChange={e => onChange(e)} />
                <button type="submit">Register</button>
            </form>
        </div>
    )
}
