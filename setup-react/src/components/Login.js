import React, { Component, useState } from "react";
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import {useHistory} from 'react-router-dom';
import {useForm} from 'react-hook-form';



export const Login = () => {
    const [email_or_username, setName] = useState('');
    const [password, setPassword] = useState('');
   //const [emailError, setEmailError] = useState('Email Required');
   //<div style={{fontSize:  12, color: "red"}}>{emailError}</div>
    const [is_contributor, setContributor] = useState(false);
    var ref = "/";
    const history = useHistory();
    const {register, handleSubmit, errors} = useForm();
    const onSubmit = data => {
        console.log(data);
    };

    const validateUserName = async (value) => {

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
                    <h2></h2>
                    <div className="field">
                    <input 
                        value={email_or_username} 
                        ref = {register({required: true})}
                        name = "email_or_username"
                        placeholder = "Username or Email" 
                        onChange={e => setName(e.target.value)}/>
                    </div>
                    <div style={{fontSize: 11, color: "red"}}>{errors.email_or_username && <p>Required</p>}</div>
                </FormGroup>

                <FormGroup>
                    <label>Password</label>
                    <h2></h2>
                    <div className="field">
                    <input 
                        value={password} 
                        name = "Password"
                        placeholder = "Password"
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
                    //handleSubmit();
                     const login = {email_or_username, password, is_contributor};
                     console.log(JSON.stringify(login));
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
                                console.log("Successful Login"); 
                                const ref="/homepage";
                                history.push(ref);
                                //redirect to home page
                            })
                         }
                         else if (response.status === 204) {
                            return(<div style={{fontSize: 11, color: "red"}}>{<p>Invalid username or password OR Incorrect Permissions</p>}</div>);
                            //const ref="/";
                            //console.log(ref);
                            //history.push(ref);
                            // reload login page
                         }
                     })
                     .catch(error => console.log(error))
                    
                    }}
                    className="btn-lg btn-dark btn-block"
                    type = "submit" className="btn-lg btn-dark btn-block">
                    {/* COMMENT HREF OUT  
                    href={ref = "/homepage"} */}
                    Log in</Button>
            </Form>
        </div>
    );
}



