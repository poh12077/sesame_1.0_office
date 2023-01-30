// import "./styles.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import '../css/login.css';

function Login() {
  const [inputs, setInputs] = useState({});

  const movePage = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    sendAccount().then(
      () => {
        movePage('/MainPage');
      }
    ).catch(
      (err) => {
        if (err.response.data == 1) {
          alert('password wrong');
        } else if (err.response.data == 2) {
          alert('id wrong');
        } else {
          alert('server down');
        }
      }
    );
  }

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }))
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
    <div className="page">
      <form  className="cover" onSubmit={handleSubmit}>
            <h1>Sesame</h1>
              <input className="loginInput"
                type="text"
                name="id"
                value={inputs.id || ""}
                onChange={handleChange}
                placeholder="ID"
              />
              <input className="loginInput"
                type="text"
                name="password"
                value={inputs.password || ""}
                onChange={handleChange}
                placeholder="password"
              />
            <button className="login-btn" type="submit">Login</button>
        </form>
    </div>
   
  )
}

export default Login;