import React, { Component, useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useLocation, useHistory , Redirect } from 'react-router-dom';
import { TextArea } from 'semantic-ui-react';
import {useForm} from 'react-hook-form';

export const JournalForm = () => {
    
    const {register, handleSubmit, errors} = useForm();

     const onSubmit = data => {
        console.log(data);
    };
    const location = useLocation();
    const history = useHistory();
    const [title, setTitle] = useState(location.state.title);
    const [body, setBody] = useState(location.state.body);
    const [entry_id, setEntry_id] = useState(location.state.entry_id);
    const [user_id, setUser_id] = useState(location.state.user_id);
    var url = "";
    if (JSON.parse(window.localStorage.getItem("user")) == null) {
        return <Redirect to="/" />;
    }
    return (
        <div>
            <Button 
                    style = {{ right : 45}}
                    className=" btn-dark text-right"
                    onClick={() => history.push("/journal")}> 
                    Cancel 
                </Button>
            
            <Form className="journal-form" onSubmit = {handleSubmit(onSubmit)}>
                
                <FormGroup>
                    <Label>Title</Label>
                    <input
                        value={title}
                        maxLength={100}
                        ref = {register({required: true})}
                        name = "title"
                        onChange={e => setTitle(e.target.value)}
                        />
                        <div style={{fontSize: 11, color: "red"}}>{errors.title && <p>Required</p>}</div>
                </FormGroup>

                <FormGroup>
                    <Label>Body</Label>
                    <TextArea maxLength={7400} style={{ marginLeft : 40}} rows={10} cols={60}
                        onChange={e => setBody(e.target.value)}>{body}</TextArea>
                </FormGroup>
            
                <Button onClick={async() =>{
                    const entry = {user_id, entry_id, title, body};
                    entry_id === 0 ? url = '/api/postJournal' : url = '/api/editJournal';
                    console.log(url);
                    const response = await fetch(url, {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(entry)
                    })
                    .then(response => {
                        console.log(response.status);
                        if (response.status === 201) {
                            history.push("/journal");
                        }
                    })
                    .catch(error => console.log(error))
                }} 
                className="btn-lg btn-dark btn-block">
                Submit</Button>
            </Form>

        </div>
    );
}