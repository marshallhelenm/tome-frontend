import React, { Component } from "react";

const BASE_URL = "http://localhost:3000/";


class SignUpPage extends Component {

  handleSignUp = (e) => {
    e.preventDefault()
    let username = e.target.username.value
    let password = e.target.password.value
    this.signUp({username, password})
  }

  signUp = (userHash) => {
    console.log("Signing Up!", userHash);

    
    fetch(BASE_URL + "signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({user: userHash})
    })
      // .then(response => response.json())
      // .then(user => {
      //   if (user.error) {
      //     alert("Invalid credentials");
      //   } else {
      //     console.log("user: ", user);
      //     localStorage.setItem("user_id", user.id);
      //     this.setState({ logged_in: true });
      //   }
      // });
  };
  



  render() {
    return <div>
        <h1>Sign Up</h1>
        <form onSubmit={this.handleSignUp} >
            <input id='username' type='text' placeholder='Username' />
            <input id='password' type='text' placeholder='Password' />
            <button type='submit'>Sign Up</button>
        </form>
    </div>;
  }
}

export default SignUpPage;
