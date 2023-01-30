import React from "react";
import axios from "axios";
import '../style.css';
import DoughnutChart from "./DoughnutChart";
import RadarChart from "./RadarChart";
import  BarChart  from "./BarChart";
import Test from './Test';

let questionNum=0;

class Question extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      options: [
        { num: 'optionOne', statement: "option1" },
        { num: 'optionTwo', statement: "option2" },
        { num: 'optionThree', statement: "option3" },
        { num: 'optionFour', statement: "option4" }
      ],
      checkedOption: "",
      questionNum: 0
    }
  }

  handleChange = (e) => {
    if (e.target.checked) {
      this.setState({
        checkedOption: e.target.value
      })
    }
  }

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.setState({
      questionNum: this.props.questionNum
    }, this.check)
  }

  check = () => {
    const url = '/questionAnswer';
    const formData = new FormData();
    formData.append('checkedOption', this.state.checkedOption);
    formData.append('questionNum', this.state.questionNum);
    const config = {
      headers: {
        'content-type': 'multipart/form-data'
      }
    }
    return axios.post(url, formData, config);
  }


  render() {
    questionNum++;
    return (
      <div className='question'>
        <form className="form" onSubmit={this.handleFormSubmit}>
                <fieldset className="fieldset" >
                  <legend>1. pick one please</legend>
                  {
                    this.state.options.map(option => (
                      <div>
                        <label>
                          <input
                            type="checkbox"
                            value={option.num}
                            onChange={this.handleChange}
                          /> {option.statement}
                        </label>
                        <br />
                      </div>
                    ))
                  }
                  <br />
                  <button className="formButton" type="submit"  >adding</button>
                </fieldset>
                {/* <RadarChart questionNum={questionNum} ></RadarChart> */}
                <BarChart questionNum={questionNum}></BarChart>
              </form>
              
      </div>
      
    )
    
  }
}

export default Question;