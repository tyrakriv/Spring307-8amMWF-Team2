import React from 'react';
import {Form} from 'reactstrap';


export const NewUserInfo = ({newUser}) => {
    return (
        <div>
            <Form>
                <h1>Last Registered User: </h1>
                <h4> Name: {newUser.first_name} {newUser.last_name}</h4>
                <h4>Username: {newUser.username}</h4>
                <h4>Created On: {newUser.date_created}</h4>
            </Form>
        </div>
    )

}