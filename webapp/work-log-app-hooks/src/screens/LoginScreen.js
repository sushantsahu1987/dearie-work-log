import React, {useState} from 'react';
import {Button, Form, FormGroup,
        Container, Row, Col, Label,
        Input, Alert} from 'reactstrap';
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
            <Container>
                <Form onSubmit={onSubmit}>
                    <FormGroup row>
                        <Col sm={2}>
                            <Label className="label">Email</Label>
                        </Col>
                        <Col sm={6}>
                            <Input type="text" 
                                onChange={onUserNamechange}
                                value={username}
                                placeholder="abc@xxx.com"/>
                        </Col>

                    </FormGroup>


                    <FormGroup row>
                        <Col sm={2}>
                            <Label className="label">Password</Label>
                        </Col>
                        <Col sm={6}>
                            <Input type="password"
                                onChange={onPasswordchange} 
                                value={password}
                                placeholder="abc1234"/>
                        </Col>
                    </FormGroup>
                    
                    <Button color="primary">Login</Button>
                </Form>
            </Container>
        </div>
    )

}

export default LoginScreen;