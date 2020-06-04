import React from 'react'
import Tabs from './Tabs';
import { Redirect } from 'react-router-dom';

function Survey() {
    if (JSON.parse(window.localStorage.getItem("user")) == null) {
        return <Redirect to="/" />;
    }
    return (
        <div> 
            <Tabs/>
            <h1 style={{
                top: 380
            }} className="text-right">Survey page</h1>
            <h2 style={{
                marginTop: 430
            }} className="question">How do you feel about your time spent outside?</h2>
            <h2 style={{
                marginTop: 470
            }} className="question">How do you feel about your time spent with others?</h2>
            <h2 style={{
                marginTop: 510
            }} className="question">How do you feel about your time spent exercising?</h2>
        </div>
    );
}

export default Survey
