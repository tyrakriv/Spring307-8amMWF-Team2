import React from 'react';
import Tabs from './Tabs';
import QuizBee from './QuizBee';

function Survey() {
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
