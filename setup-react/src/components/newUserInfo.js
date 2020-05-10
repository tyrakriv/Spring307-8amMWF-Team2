import React from 'react';
import {Button} from 'reactstrap';

export const NewUserInfo = ({newUser}) => {
    return (
        <div>
            <Form>
                <h1 class="text-right">Welcome {newUser.first_name}! </h1>
                <h1>Username: {newUser.username}</h1>
                <h1>Created On: {newUser.date_created}</h1>
            </Form>
        </div>
    )

}