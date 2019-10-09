import React, { Component } from "react";
import Notebook from './Notebook.js'
import AuthHOC from '../HOC/AuthHOC.js'

const BASE_URL = "http://localhost:3000/";


class MainContainer extends Component {

  grabUser = () => {
    fetch(BASE_URL+'users/show', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('token')}`,
        "Content-Type": "application/json",
        Accept: "application/json"
      },
    })
  }

  render() {
    return(
       <div>Here's the main page!
       <Notebook />
       </div>
       )
  }
}

export default AuthHOC(MainContainer);
