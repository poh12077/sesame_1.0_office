// import "./styles.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";


function Login() {
    const [inputs, setInputs] = useState({});
  
    const movePage = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
         sendAccount().then(
            (res)=>{
                 if(res.data =='0'){
                    movePage('/MainPage');
                 }else if (res.data == 1){
                    alert('password wrong');    
                 }else if (res.data==2){
                    alert('id wrong');
                 }
            }
         ).catch(
            ()=>{
                alert('server down');
            }
         );
      }

      const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}))
      }

     let sendAccount = () => {
        const url = '/sendAccount';
        const formData = new FormData();
        formData.append('id', inputs.id);
        formData.append('password', inputs.password);
        const config = {
          headers: {
            'content-type': 'multipart/form-data'
          }
        }
        return axios.post(url, formData, config);
      }

    return (
        <form onSubmit={handleSubmit}>
        <label>ID :
        <input 
          type="text" 
          name="id" 
          value={inputs.id || ""} 
          onChange={handleChange}
        />
        </label>
        <label>PASSWORD :
          <input 
            type="text" 
            name="password" 
            value={inputs.password || ""} 
            onChange={handleChange}
          />
          </label>
          <input type="submit" />
      </form>
    )
  }

  export default Login;