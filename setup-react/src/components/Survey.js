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
            <QuizBee/>
            
        </div>
    );
}

export default Survey
