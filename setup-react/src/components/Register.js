import React, { Component, useState } from "react";
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import {useHistory} from 'react-router-dom';
export const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [first_name, setFirst_name] = useState('');
    const [last_name, setLast_name] = useState('');
    // var ref = "/register";
    var localStorage = window.localStorage;
    const history = useHistory();
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
                            const ref = "/register";
                            history.push(ref);
                            /* body is either "Email already linked 
                            to an account" or "Username Taken" */
                            
                        }
                     })
                     .catch(error => console.log(error))

                    }}
                    //href={ref = "/homepage"}
                    className="btn-lg btn-dark btn-block">
                    Submit
                    </Button>
            </Form>
        </div>);

}

