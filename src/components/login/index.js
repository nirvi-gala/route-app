import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux";
import { Link, Redirect } from 'react-router-dom';
import { login } from "../../actions/loginActions";

function LoginPage() {
    const [username, setUsername] = useState("");
    const [pwd, setPwd] = useState("");
    const [submit, setSubmit] = useState(false);
    const [error, setError] = useState(false);

    const dispatch = useDispatch();

    const submitDetails = (e) => {
        let data = {username, pwd};
        if(username && pwd){
            dispatch(login(data))
            setSubmit(true);
        }else{
            setError(true)
        }
    }

    return (
        <div className="wrapper">
            <h2 className="login-head">Login Page</h2>
            <div className="inner-wrapper">
                <div className="login">
                    <label>User Name:</label>
                    <input value={username} onChange={(e) => setUsername(e.target.value)}/>
                </div>
                <div className="login">
                    <label>Password:</label>
                    <input type="password" value={pwd} onChange={(e) => setPwd(e.target.value)}/>
                </div>
                <div className="login-btn">
                    <button onClick={() => submitDetails()}>Login</button>
                </div>
                {submit && <Redirect to="/" />}
                {error && <p style={{ color: "red" }}>Please Provide All Details</p>}
            </div>
        </div>
    )
}

export default LoginPage;