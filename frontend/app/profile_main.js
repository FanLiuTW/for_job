import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import { Link, Route, Switch, Redirect } from 'react-router-dom';
import Nav from "/Users/fan/for_job/frontend/app/nav.js";
import Category from "/Users/fan/for_job/frontend/app/category.js";
import Add from "/Users/fan/for_job/frontend/app/Add.js";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      click: true,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  
  handleClick() {
    const currentState = this.state.click;
    this.setState({click: !currentState});
  }

  render() {
    return (
      <div style={{position: "relative", width:"100%"}}>
        <div className="profile">
          <Nav/>
          <div style={{position: "relative", top: "-67px", right: "7%", float: "right", fontFamily: "'Quicksand', sans-serif", fontSize: "22px", color: "#14243d"}}>
            <Link to={'/manage'}><button type="button" className="btn btn_manage" onClick={() => this.handleClick()}>Manage</button></Link>
          </div>
          { 
            this.state.click &&
            <Category/>
          }
          <Switch>
            <Route exact path='/manage' component={Add}></Route>
            <Redirect to="/"/>
          </Switch>
          { 
            !this.state.click &&
            <Link to={'/'}>
              <div style={{position: "relative", float: "right", top: "100%", right: "50px", fontFamily: "'Quicksand', sans-serif", fontSize: "22px", color: "#14243d"}} onClick={() => this.handleClick()}>
                <button type="button" className="btn btn_manage">Back</button>
              </div>
            </Link>
          }
        </div>
      </div>
  	)
  }
}

export default App;