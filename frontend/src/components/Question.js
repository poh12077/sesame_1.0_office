import React from "react";
import axios from "axios";


class Question extends React.Component{

    constructor(props){
        super(props);
        this.state={
          options:[
            {num : 1, statement : "option1"},
            {num : 2, statement : "option2"},
            {num : 3, statement : "option3"},
            {num : 4, statement : "option4"}
          ],
          checkedOption:0,
          questionNum:0
        }
      }
    
      handleChange = (e) =>{
        if(e.target.checked){
            this.setState({
                checkedOption: e.target.value
            })    
        }
      }
    
      handleFormSubmit = (e) =>{
        e.preventDefault();
        this.setState({
            questionNum : this.props.questionNum
        }, this.check)
      }
    
      check = () =>{
        const url = '/checkedOption';
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
    
    render(){
        return(
            <form onSubmit={this.handleFormSubmit}>
                {  
                        this.state.options.map(option => (  
                        <li>  
                            <label>  
                            <input  
                                type="checkbox"
                                
                                value={option.num}  
                                onChange={this.handleChange}  
                            /> {option.statement}  
                            </label>  
                        </li>  
                        ))  
                    }  
          <br/>  
      <button type="submit"  >adding</button>
      </form>
        )
    }
}

export default Question;