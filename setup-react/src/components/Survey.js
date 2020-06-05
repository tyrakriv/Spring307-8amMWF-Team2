import React from 'react';
import Tabs from './Tabs';
import { Redirect } from 'react-router-dom';
import QuizBee from './QuizBee';

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
                top:425
            }}>Fill out all questions for a response!</h2>
            <QuizBee/>
            
        </div>
    );
}

export default Survey
