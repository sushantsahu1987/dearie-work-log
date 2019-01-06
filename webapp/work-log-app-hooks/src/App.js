import React,{useEffect, useState} from 'react';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';

import './App.css';
import LoginScreen from './screens/LoginScreen';

function App(props) {

    const [loggedIn, setLoggedIn] = useState(false);

    const onLogin = (username, password) => {

        console.log('on login : ')
        console.log(username);
        console.log(password);

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
            console.log(data);
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

    return (
      <div>
          <Header 
            show={loggedIn}/>
          {/* <HomeScreen/> */}
          <LoginScreen 
            onLogin={onLogin} />
      </div>
    );

}

export default App;
