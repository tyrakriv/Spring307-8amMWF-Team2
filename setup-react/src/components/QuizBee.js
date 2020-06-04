import "./style.css";
import quizService from "../quizService";
import QuestionBox from "./QuestionBox";
import Result from "./Result";

import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class QuizBee extends Component{
    state = {
      questionBank: [],
      responses: 0,
      score: 0,
    };
    getQuestions = () => {
      quizService().then(question => {
        this.setState({
          questionBank: question
        });
      });
    };
    computeAnswer = (answer, correct) => {
      if (answer === correct){
        this.setState({
          score: this.state.score + 1
        })
      }
      this.setState({
        responses: this.state.responses < 3 ? this.state.responses + 1 : 3
      });
      console.log(this.state.responses);
    };
    componentDidMount() {
      this.getQuestions();
    }
  
    render() {
      return (
        <div style={{
          marginTop: 450
          }} className = "container">
          <div className="title">Survey</div>
            {this.state.questionBank.length > 0 &&
            this.state.responses < 3 &&  
              this.state.questionBank.map(
                ({question,answers,correct,questionId}) => (
                <QuestionBox 
                  question={question} 
                  options={answers} 
                  key={questionId}
                  selected={answer => this.computeAnswer(answer, correct)}
                />)
            )}
            {this.state.responses === 3 ? (
              <Result score={this.state.score} />
            ) : null}
        </div>
      )
    }
  }
  
  export default QuizBee