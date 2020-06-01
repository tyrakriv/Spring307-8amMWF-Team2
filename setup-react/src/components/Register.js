import React, { Component, useState } from "react";
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import {useForm} from 'react-hook-form';

export const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [first_name, setFirst_name] = useState('');
    const [last_name, setLast_name] = useState('');
    //var ref = "/homepage";
    const {register, handleSubmit, errors} = useForm();
    const onSubmit = (data) => {
        console.log(data);
    };
    return (           
        <div> 
            <Form className="login-form" onSubmit = {handleSubmit(onSubmit)}>
                <div className="text-right">
                <Button 
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
                     .then(response => {
                         if (response.status === 409) {
                             response.text().then((body) => {
                                 console.log(body); 
                        
                             });
                            }   
                         else { 
                             console.log("Successful Registration")
                         }
                     })

                    }}
                    //href={ref}
                    className="btn-lg btn-dark btn-block"
                    type = "submit">
                    Submit
                    </Button>
            </Form>
        </div>);

}