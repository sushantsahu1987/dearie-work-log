import React,{useEffect, useState} from 'react';
import {Route} from 'react-router-dom';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';

import './App.css';
import LoginScreen from './screens/LoginScreen';

function App(props) {

    const [loggedIn, setLoggedIn] = useState(false);

    const onLogout = () => {

        fetch('http://localhost:3001/worklog/logout',
        {
            method:"POST",
            headers: {
                "Content-Type":"application/json",
            },
            body: JSON.stringify({

            })
        })
        .then(resp => resp.json())
        .then(data => {
            if(data.msg === 'success') {
                setLoggedIn(false);
            }
        })
        .catch(e => {
            console.log(e);
        })
    }

    const onLogin = (username, password) => {

        fetch('http://localhost:3001/worklog/login',
        {
            method:"POST",
            headers: {
                "Content-Type":"application/json",
            },
            body: JSON.stringify({
                email: username,
                password
            })
        })
        .then(resp => resp.json())
        .then(data => {
            if(data.msg === 'success') {
                setLoggedIn(true);
            }else {
                setLoggedIn(false);
            }
        })
        .catch(e => {
            console.log(e);
        })
    }

    const Login = () => {
        return (
            <LoginScreen 
                onLogin = {onLogin}/>
        )
    }

    return (
        <div>
            <div>
                <Header 
                    onLogout={onLogout}
                    show={loggedIn}/>
            </div>
            <div>
                <Route path="/" exact component={Login} />
                <Route path="/login" component={Login} />
                <Route path="/home" component={HomeScreen}/>
            </div>
        </div>
    );

}

export default App;
