import React, { Component, useState } from "react";
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import {useForm} from 'react-hook-form';
import {useHistory, Redirect} from 'react-router-dom';
export const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [first_name, setFirst_name] = useState('');
    const [last_name, setLast_name] = useState('');
    const {register, handleSubmit, errors} = useForm();
    const onSubmit = (data) => {
        console.log(data);
    };
    // var ref = "/register";
    var localStorage = window.localStorage;
    const history = useHistory();
    if (JSON.parse(window.localStorage.getItem("user")) != null) {
        return <Redirect to="/homepage" />;
    }
    return (           
        <div> 
            <Form className="login-form" onSubmit = {handleSubmit(onSubmit)}>
                <div className="text-right">
                <Button 
                        //CHANGE THIS TO GO DIRECT TO HOMEPAGE BY LOGIN BUTTON
                        href="/"
                        className=" btn-dark text-right">
                        Log in
                </Button>
                </div>              
                <h1>
                <span className="font-weight-bold">Register</span>
                </h1>
                <FormGroup>
                    <label>Email</label>
                    <h2></h2>
                    <div className="field">
                    <input 
                        value={email} 
                        placeholder = "Email" 
                        name = "Email"
                        ref = {register({required: true})}
                        onChange={e => setEmail(e.target.value)}/>
                    </div>
                    <div style={{fontSize: 11, color: "red"}}>{errors.Email && <p>Required</p>}</div>
                </FormGroup>

                <FormGroup>
                    <label>Username</label>
                    <h2></h2>
                    <div className="field">
                    <input
                        value={username} 
                        name = "username"
                        ref = {register({required: true})}
                        placeholder = "Username" 
                        onChange={e => setUsername(e.target.value)}/>
                    </div>
                    <div style={{fontSize: 11, color: "red"}}>{errors.username && <p>Required</p>}</div>
                </FormGroup>

                <FormGroup>
                    <label>First Name</label>
                    <h2></h2>
                    <div className="field">
                    <input
                        value={first_name} 
                        placeholder = "First Name" 
                        name = "first_name"
                        ref = {register({required: true})}
                        onChange={e => setFirst_name(e.target.value)}/>
                    </div>
                    <div style={{fontSize: 11, color: "red"}}>{errors.first_name && <p>Required</p>}</div>
                </FormGroup>

                <FormGroup>
                    <label>Last Name</label>
                    <h2></h2>
                    <div className="field">
                    <input 
                        value={last_name} 
                        placeholder = "Last Name" 
                        name = "last_name"
                        ref = {register({required: true})}
                        onChange={e => setLast_name(e.target.value)}/>
                    </div>
                    <div style={{fontSize: 11, color: "red"}}>{errors.last_name && <p>Required</p>}</div>
                </FormGroup>
            
                <FormGroup>
                    <label>Password</label>
                    <h2></h2>
                    <div className="field">
                    <input 
                        value={password} 
                        placeholder = "Password"
                        name = "password"
                        ref = {register({required: true})}
                        onChange={e => setPassword(e.target.value)}/>
                    </div>
                    <div style={{fontSize: 11, color: "red"}}>{errors.password && <p>Required</p>}</div>
                </FormGroup>  
          
                <Button onClick={async () =>{
                     const register = {email, username, first_name, last_name, password};

                     const response = await fetch('http://127.0.0.1:5000/api/register', {
                         method: 'POST',
                         headers:{
                            'Content-Type': 'application/json'
                         },
                         body: JSON.stringify(register)
                     })
                     .then(response => { /*if status=409, then unsuccessful registration*/
                        console.log(response.status);
                        if (response.status === 201) { 
                            response.json().then(data => {//store user in localStrage as token
                                localStorage.setItem('user', JSON.stringify(data.user));
                                console.log("Successful Registration");
                                console.log(JSON.parse(window.localStorage.getItem("user")));
                                const ref = "/homepage";
                                history.push(ref);
                            })
                            /* redirect to the home page or login page here */
                        }   
                        else if (response.status === 409) { /* successful creation of account */
                            return(<div style={{fontSize: 11, color: "red"}}>{<p>Username or Email Taken</p>}</div>);
                            /* body is either "Email already linked 
                            to an account" or "Username Taken" */
                            
                        }
                        else if (response.status === 204){
                            return(<div style={{fontSize: 11, color: "red"}}>{<p>All Fields Required</p>}</div>);
                        }
                     })
                     .catch(error => console.log(error))

                    }}
                    className="btn-lg btn-dark btn-block"
                    type = "submit">

                    Submit
                    </Button>
            </Form>
        </div>);

}

