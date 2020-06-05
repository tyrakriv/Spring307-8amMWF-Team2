import React from 'react'
import Tabs from './Tabs';
import Todos from './Todos';

function Profile() {
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
