import React from 'react';

export const NewUserInfo = ({newUser}) => {
    return (
        <div>
            <h1>Welcome</h1>
            <h1>{newUser.first_name} </h1>
            <h1>Username</h1>
            <h1>{newUser.username}</h1>
        </div>
    )

}