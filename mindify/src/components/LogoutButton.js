import React, { Component } from 'react';

class LogoutButton extends Component{
    render(){
        return (
            <div>
                <button style = {{
                    position: 'absolute',
                    color: 'gray',
                    top: 40,
                    right: 70,
                    borderRadius:5,
                    borderWidth:4,
                    padding: 4
                }}
                >logout</button>
            </div>
        )
    }
}

export default LogoutButton
