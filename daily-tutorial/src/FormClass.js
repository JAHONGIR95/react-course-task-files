import React, { Component } from "react";

export default class FormClass extends Component {

    constructor(){
        super();
        this.state = {
            email: "",
            password: ""
        }
    }

    formSubmit = (e) => {
        e.preventDefault();
        console.log(`
        Email: ${this.state.email}
        Password: ${this.state.password}`)
    }

  render() {
    return (
      <form onSubmit={this.formSubmit}>
        <h2>Login</h2>

        <div>
          <label htmlFor="email">
            Email:
            <input type="text" value={this.state.email} onChange={(e)=> this.setState({email: e.target.value})} />
          </label>
        </div>

        <div>
          <label htmlFor="password">
            Password:
            <input type="password" value={this.state.password} onChange={(e) =>this.setState({password: e.target.value})}/>
          </label>
        </div>

        <button>Submit</button>
      </form>
    );
  }
}
