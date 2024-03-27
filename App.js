import logo from './logo.svg';
import './App.css';

import React,{ useState}from 'react'

const App = () => {
  const [data,setData]=useState({
    username:'',
    email:'',
    password:'',
    confirmedPassword:''
  })
  const{username,email,password,confirmedPassword}=data;

  const handler= e =>{
    setData({...data,[e.target.name]:e.target.value})
   
  }

  const submit = e =>{
  e.preventDefault();
  if(username.length <=5){
    alert("username must be atleast 5 characters");
  }

  if(password === confirmedPassword){
    console.log(data);
  }
   else{
    console.log("passwords are not matching");
   }
  }

  return (
    <div >
    <center>
      <form onSubmit={submit} >
        <h2> Signup form</h2>
        <p> Username</p>
          <input type="text"  value={username} name="username"  placeholder='Username' className="App"
          onChange={handler}/><br/>
        <p>E-mail</p>
        <input type='email' value={email} name="email" placeholder='Email'
         onChange={handler} className="App"/><br/>
        <p> Password</p>
         <input type='password' value={password} name="password" placeholder='Password'
         onChange={handler} className="App"/><br/>
        <p>Confirmed-Password</p>
         <input type='password'  value={confirmedPassword} name="confirmedPassword" 
         placeholder='Confirmed Password' onChange={handler} className="App" /><br/>

          {password !== confirmedPassword ? <p style={{color:"red"}}>passwords are not matching</p> : null}
          <p> </p>
          <input type='submit' name= "submit" className='submit'/><br/>
          <h6 style={{color:"blueviolet"}} >Already Registerd? Login</h6>
      </form>
    </center>
    </div>
  )
}

export default App
