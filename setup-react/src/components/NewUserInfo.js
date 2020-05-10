import React from 'react';

export const NewUserInfo = ({newUser}) => {
    return (
        <div>
            <h1>Welcome {newUser.first_name} </h1>
            <h1>Username: {newUser.username}</h1>
            <h1>Created On: {newUser.date_created}</h1>
        </div>
    )

}