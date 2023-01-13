// import './App.css';
// import { useState } from "react";
import * as React from 'react';

function App() {
   const [checked, setChecked] = React.useState(false);

  const handleChange = () => {
    setChecked(!checked);
  };
  
  return (
     <div>
      <label>
        <input
          type="checkbox"
          checked={checked}
          onChange={handleChange}
        />
        My Value
      </label>

      <p>Is "My Value" checked? {checked.toString()}</p>
    </div>
  )
}

export default App;


  // <form onSubmit={this.handleFormSubmit}>
  //               <h1>customer adding</h1>
  //               profile image : <input type="file" id="profileImage" name="file" file={this.state.file} value={this.state.fileName} onChange={this.handleFileChange} /><br />
  //               name : <input type="text" name="userName"  value={this.state.userName} onChange={this.handleValueChange} /><br />
  //               birthday : <input type="text" name="birthday" value={this.state.birthday} onChange={this.handleValueChange} /><br />
  //               gender : <input type="text" name="gender" value={this.state.gender} onChange={this.handleValueChange} /><br />
  //               job : <input type="text" name="job" value={this.state.job} onChange={this.handleValueChange} /><br />
  //               <button type="submit">adding</button>
  //           </form>