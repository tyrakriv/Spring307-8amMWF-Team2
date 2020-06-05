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
            <div className="section-title">
                <h1>Survey:</h1>
                <h2>Fill out all questions for a response!</h2>
            </div>
            <QuizBee/>
            
        </div>
    );
}

export default Survey
