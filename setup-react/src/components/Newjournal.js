import React, { Component, useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export const Newjournal = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    return (
        <div>
            <Form className="journal-form">
                <h1>
                <span className="font-weight-bold">New Journal</span>
                </h1>
                <FormGroup>
                    <Label>Title</Label>
                    <Input
                        value={title}
                        placeholder="Title"
                        onChange={e => setTitle(e.target.value)}/>
                </FormGroup>

                <FormGroup>
                    <Label>Body</Label>
                    <Input className="journalbody"
                        value={body}
                        placeholder="Journal Body"
                        onChange={e => setBody(e.target.value)}/>
                </FormGroup>
            </Form>
        </div>
    );
}