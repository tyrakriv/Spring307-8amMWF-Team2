import React, { Component, useState } from "react";
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import {useHistory, Redirect} from 'react-router-dom';
import {useForm} from 'react-hook-form';

export const Login = () => {
    var ref = "/";
    const [email_or_username, setName] = useState('');
    const [password, setPassword] = useState('');
    const [is_contributor, setContributor] = useState(false);
    const [incorrect_username_password, setError_204] = useState(false);
    const history = useHistory();
    const {register, handleSubmit, errors} = useForm();
    const onSubmit = data => {
        console.log(data);
    };
    const validateUserName = async (value) => {}
    if (JSON.parse(window.localStorage.getItem("user")) != null) {
        return <Redirect to="/homepage" />;
    }
    return(
        <div> 
            <Form className="login-form" onSubmit = {handleSubmit(onSubmit)}>
                <h1>
                <div className="text-right">
                    <Button
                        href="/register"
                        className=" btn-dark text-right">
                        sign up
                    </Button>
                </div>
                <span className="font-weight-bold">Mindify</span>
                </h1>
                <FormGroup>
                    <Label>Username or Email</Label>
                    <div className="field">
                    <input 
                        value={email_or_username} 
                        ref = {register({required: true})}
                        name = "email_or_username"
                        placeholder = "username or email" 
                        onChange={e => setName(e.target.value)}/>
                    </div>
                    <div style={{fontSize: 11, color: "red"}}>{errors.email_or_username && <p>Required</p>}</div>
                </FormGroup>

                <FormGroup>
                    <label>Password</label>
                    <div className="field">
                    <input 
                        value={password} 
                        name = "Password"
                        placeholder = "password"
                        ref = {register({required: true})}
                        onChange={e => setPassword(e.target.value)}/>    
                    </div>  
                    <div style={{fontSize: 11, color: "red"}}>{errors.Password && <p>Required</p>}</div>          
                </FormGroup>

                <FormGroup>
                    <div className="text-center">
                    <Input
                        type="checkbox"
                        value={is_contributor}
                        onChange={e => setContributor(e.target.checked)}/>
                        Contributor
                    </div>
                </FormGroup>
                
                <Button onClick={async () =>{
                     const login = {email_or_username, password, is_contributor};
                     const response = await fetch('http://127.0.0.1:5000/api/login', {
                         method: 'POST',
                         headers:{
                            'Content-Type': 'application/json'
                         },
                         body: JSON.stringify(login)
                     })
                     .then(response => {
                         console.log(response.status);
                         if (response.status === 201) {
                            response.json().then(data => { // store user in localStorage as token
                                window.localStorage.setItem("user", JSON.stringify(data.user));
                                history.push("/homepage");
                                //redirect to home page
                            })
                         }
                         else if (response.status === 204) {
                            setError_204(true);
                         }
                     })
                     .catch(error => console.log(error))
                    
                    }}
                    className="btn-lg btn-dark btn-block"
                    type = "submit" className="btn-lg btn-dark btn-block">
                    Log in
                </Button>
                { incorrect_username_password && 
                    <h3 style={{fontSize: 15, color: "red"}}>Incorrect Username, Password or Privilege</h3>}
            </Form>
        </div>
    );
}