import { Component } from 'react';
import axios from "axios";
// import React from 'react';
import Question from './components/Question';
import './style.css';


class App extends Component {
    questionList = [1, 2, 3, 4];

    render() {
        return (
            this.questionList.map(
                (questionNum) =>
                    <div className='question' >
                        <Question key={questionNum} questionNum={questionNum} ></Question>
                        <br /><br /><br />
                    </div>
            )
        )
    }


}

export default App;