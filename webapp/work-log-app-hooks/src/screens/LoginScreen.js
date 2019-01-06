import React, {useState} from 'react';
import './LoginScreen.css';

function LoginScreen(props) {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = (e) => {
        e.preventDefault();
        props.onLogin(username, password);
    }

    const onUserNamechange = (e) => {
        setUsername(e.target.value);
    }

    const onPasswordchange = (e) => {
        setPassword(e.target.value);
    }

    return (
        <div className="login">
            <form onSubmit={onSubmit}>
                <div className="input">
                    <label className="label">Email</label>
                    <input type="text" 
                            onChange={onUserNamechange}
                            value={username}
                            placeholder="abc@xxx.com"/>
                </div>
                <div className="input">
                    <label className="label">Password</label>
                    <input type="password"
                            onChange={onPasswordchange} 
                            value={password}
                            placeholder="abc1234"/>
                </div>
                <button>Login</button>
            </form>
        </div>
    )

}

export default LoginScreen;