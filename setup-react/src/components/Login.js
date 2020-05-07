import React, { Component, useState } from "react";
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
export const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (           
        <div> 
            <Form className="login-form">
                
                <h1>
                <div className="text-right">
                <Button className=" btn-dark text-right">sign up</Button>
                </div>
                <span className="font-weight-bold">Mindify</span>
                </h1>
                <FormGroup>
                    <Label>Email</Label>
                    <h2></h2>
                    <Input 
                        value={email} 
                        placeholder = "Email" 
                        onChange={e => setEmail(e.target.value)}/>
                </FormGroup>
            
                <FormGroup>
                    <label>Password</label>
                    <h2></h2>
                    <Input 
                        value={password} 
                        placeholder = "Password"
                        on
                        onChange={e => setPassword(e.target.value)}/>
                </FormGroup>
                <Button onClick={async () =>{
                     const login = {email, password};
                     const response = await fetch('/login', {
                         method: 'POST',
                         headers:{
                            'Content-Type': 'application/json'
                         },
                         body: JSON.stringify(login)
                     })
                     if(response.ok)
                     {
                         console.log("response worked");
                     }
                    }}className="btn-lg btn-dark btn-block">Log in</Button>
            </Form>
        </div>);

}



