import React, { Component } from 'react';
import Quoteitem from './Quoteitem';
import Tabs from './Tabs';
import LogoutButton from './LogoutButton';

class Homepage extends Component {
    state = {
        quote: {
            text: 'My dark days made me strong, or maybe I already was strong, and they made me prove it'
        }
    }
    render(){
        // console.log(this.state.quote.text);
        return (
            <div>
                <LogoutButton/>
                <Tabs/>
                <h1 style = {{
                    paddingTop: 30,
                    paddingLeft: 30,
                    textAlign: "left",
                    color: "blue"
                }}>Mindify</h1>
                <h3 style = {{
                    paddingTop: 50,
                    paddingLeft: 200,
                    paddingRight: 200,
                    textAlign: "center"
                }}>{this.state.quote.text}</h3>
            </div>
        );
    }
}

export default Homepage;
