import React, { Component } from 'react'

export class Quoteitem extends Component {
    render() {
        return (
            <div style = {{
                color: 'green', 
                paddingTop: 50,
                paddingLeft: 200,
                paddingRight: 200,
                textAlign: 'center',
                fontSize: 20,
                //font: 'fantasy'
            }}>You Matter.
            </div>
        )
    }
}

export default Quoteitem
