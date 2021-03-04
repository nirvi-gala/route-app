import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { logout, login } from '../../actions/loginActions'

const User = () => {
    const loginDetails = useSelector(state => state.login)
    let { userData: {username, pwd }} = loginDetails
    const [ newPwd, setNewPwd ] = useState(pwd);
    const [ changePwd, setChangePwd ] = useState(false);

    const dispatch = useDispatch();

    const changePassword = () => {
        setChangePwd(true)
    }

    const userLogout = () => {
        dispatch(logout())
    }

    const savePassword = () => {
        let data = {username,pwd: newPwd}
        dispatch(login(data))
        setChangePwd(false)
    }

    return (
        <div className="container">
            <div className="user-container">
                <div className="user-details">
                    <label>User Name:</label>
                    <p>{username}</p>
                </div>
                {changePwd ? 
                    <div className="user-details">
                        <label>New Password:</label>
                        <input type="password" value={newPwd} onChange={(e) => setNewPwd(e.target.value)}/>
                    </div>
                : <div className="user-details">
                    <label>Password:</label>
                    <p>{pwd}</p>
                </div>}
                {!changePwd ? 
                    <button onClick={(e) => changePassword()}>Change Password</button>
                : <button onClick={(e) => savePassword()}>Save Password</button>}
                <button onClick={() => userLogout()}>Logout</button>
            </div>
        </div>
    )
}

export default User; 
