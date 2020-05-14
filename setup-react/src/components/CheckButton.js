import React from 'react';

export default class CheckButton extends React.Component{
    constructor (props){
        super(props);
        this.state = {
            isShown: true,
        }
    }

    toggleIsShown = () => this.setState(({isShown}) => ({isShown: !isShown}));

    render(){
        const {isShown} = this.state;
        return(
            <div>
                <button onClick={this.toggleIsShown}>Toggle</button>
                <div>Welcome</div>
            </div>
        )
    }

}