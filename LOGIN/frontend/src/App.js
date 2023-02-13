import { useState } from 'react';
import './login.css';
import logo from './fblogin.svg';
function App() {
  const [emailfocus, setEmailfocus] = useState(false)
  const [passwordfocus, setPasswordfocus] = useState(false)
  const getvalue=()=>{
    let a=document.getElementsByName("id");
    console.log(a[0].value,a[1].value);
    alert(a[0].value+" "+a[1].value);
  }
  return (
    <div id="outer">
<form action="../../post" method="post" className='form'>
  <button type='submit'>Connect</button>
</form>

      <div id="leftcontainer">
        <img src={logo} alt="logo" />
        <h2>Facebook helps you connect and share with the people in your life.</h2>
      </div>
      <div id="rightcontainer">

        <form action='/signup' method ="POST" >
          <input onFocus={() => setEmailfocus(true)}
            onBlur={() => setEmailfocus(false)}
            id={emailfocus ? "active" : ""}
            type="text" placeholder='Email address or phone number' name='id'></input>


          <input onFocus={() => setPasswordfocus(true)}
            onBlur={() => setPasswordfocus(false)}
            id={passwordfocus ? "active" : ""}
             name="id" type="password" placeholder='Password'></input>

          <button id="logbutton" type='submit' >Log in </button>
          <a href=" ">Forgotten password?</a>
          <div id="line"></div>
          <button id="createbutton">Create new account</button>
        </form>
        <div id="page"><b>Create a Page</b> for a celebrity, brand or business.</div>
      </div>
    </div>
  );
}

export default App;

// // import logo from "./logo.svg";
// // import "./App.css";

// function App() {
// return (
// 	<div className="App">
// 	<header className="App-header">
// 		{/* <img src={logo} className="App-logo"
// 			alt="logo" /> */}
		
// <p>A simple React app.....</p>

// 		<a
// 		className="App-link"
// 		href="https://reactjs.org"
// 		target="_blank"
// 		rel="noopener noreferrer"
// 		>
// 		Learn React
// 		</a>
// 		<form action="/hi" method="post"
// 			className="form">
// 		<button type="submit">Connected?</button>
// 		</form>
// 	</header>
// 	</div>
// );
// }

// export default App;

