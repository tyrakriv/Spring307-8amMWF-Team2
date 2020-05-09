import React from 'react';

export const newUserInfo = ({newUser}) => {
    return (
        <div>
            <h1>Welcome {newUser.first_name} </h1>
            <h1>Username</h1>
            <h1>{newUser.username}</h1>
        </div>
    )

}