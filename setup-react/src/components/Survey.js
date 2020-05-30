import React from 'react'
import Tabs from './Tabs';
import PropTypes from 'prop-types'

function Survey(props) {
    return (
        <div> 
            <div>
                <Tabs/>
                <h1 style={{
                    top: 380
                }} className="text-right">Survey page</h1>
                <h2 style={{
                    marginTop: 430
                }} className="question">How do you feel about your time spent exercising?</h2>
                <h2 style={{
                    marginTop: 460
                }} className="question">How do you feel about your time outside?</h2>
                <h2 style={{
                    marginTop: 490
                }} className="question">How do you feel about your time with others?</h2>
            </div>
        </div>
    );
}

Survey.propTypes = {
    content: PropTypes.string.isRequired
};

export default Survey
