import React from 'react'
import Tabs from './Tabs';
import Todos from './Todos';
import { Redirect } from 'react-router-dom';

function Profile() {
    if (JSON.parse(window.localStorage.getItem("user")) == null) {
        return <Redirect to="/" />;
    }
    return (
        <div>
            <Tabs/>
            <h1 style={{
                  top: 380
                }}className="text-right">Profile page</h1>
        </div>
    )
}

export default Profile
