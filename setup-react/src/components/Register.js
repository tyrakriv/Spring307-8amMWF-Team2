import React, { Component, useState } from "react";
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
export const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [first_name, setFirst_name] = useState('');
    const [last_name, setLast_name] = useState('');
    var ref = "/register";
    return (           
        <div> 
            <Form className="login-form">
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
                    <Label>Email</Label>
                    <h2></h2>
                    <Input 
                        value={email} 
                        placeholder = "Email" 
                        onChange={e => setEmail(e.target.value)}/>
                </FormGroup>

                <FormGroup>
                    <Label>Username</Label>
                    <h2></h2>
                    <Input 
                        value={username} 
                        placeholder = "Username" 
                        onChange={e => setUsername(e.target.value)}/>
                </FormGroup>

                <FormGroup>
                    <Label>First Name</Label>
                    <h2></h2>
                    <Input 
                        value={first_name} 
                        placeholder = "First Name" 
                        onChange={e => setFirst_name(e.target.value)}/>
                </FormGroup>

                <FormGroup>
                    <Label>Last Name</Label>
                    <h2></h2>
                    <Input 
                        value={last_name} 
                        placeholder = "Last Name" 
                        onChange={e => setLast_name(e.target.value)}/>
                </FormGroup>
            
                <FormGroup>
                    <label>Password</label>
                    <h2></h2>
                    <Input 
                        value={password} 
                        placeholder = "Password"
                        onChange={e => setPassword(e.target.value)}/>
                </FormGroup>  
          
                <Button onClick={async () =>{
                     const register = {email, username, first_name, last_name, password};
                     const response = await fetch('/register', {
                         method: 'POST',
                         headers:{
                            'Content-Type': 'application/json'
                         },
                         body: JSON.stringify(register)
                     })
                     .then(response => { /*if status=409, then unsuccessful registration*/
                         if (response.status == 409) {
                             response.text().then((body) => {
                                 console.log(body); 
                                 ref = "/register";
                                 /* body is either "Email already linked 
                                                    to an account" or "Username Taken" */
                             });
                            }   
                         else { /* successful creation of account */
                             console.log("Successful Registration")
                             ref = "/homepage";
                             /* redirect to the home page or login page here */
                         }
                     })

                    }}
                    href = {ref}
                    className="btn-lg btn-dark btn-block">
                    Submit
                    </Button>
            </Form>
        </div>);

}