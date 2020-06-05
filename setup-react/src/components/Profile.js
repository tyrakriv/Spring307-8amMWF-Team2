import React, { useReducer } from 'react'
import Tabs from './Tabs';
import Todos from './Todos';
import { Redirect } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

const ProfileData = ({ user }) => {
    console.log(user);
    console.log(user.username);
    return (
        <div className="profile-data">
            <h1>Profile</h1>
            <h2>Name: {user.first_name} {user.last_name}</h2>
            <h2>Username: {user.username}</h2>
            <h2>Email: {user.email}</h2>
            <h2>User Since: {user.date_created}</h2>
            <h2>You are {user.is_contributor ? "" : "not"} a contributor</h2>
        </div>
    )
}

function Profile() {
    const user_token = JSON.parse(window.localStorage.getItem("user"));
    console.log("in Profile", user_token.username);
    if (user_token == null) {
        return <Redirect to="/" />;
    }
    console.log("in Profile", user_token);
    return (
        <div>
            <Tabs/>
            <ProfileData user={user_token} /> 
        </div>
    )
}

export default Profile
