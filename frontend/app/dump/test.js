import React, {useState}from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
  	const classes = this.state.open ? "basket" : "basket hide";
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
        <div className="container">
          <img style={{height: 70}} src={require('/Users/fan/website/img/c7830b98-2175-43ac-a0f1-b7f289e598ea_200x200.png')}/>
          <a className="navbar-brand js-scroll-trigger" href="#page-top">Logbook System</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle bg-dark" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{border:'none', fontSize:'20px', width:'100%'}}>Fan, Liu<br/><div style={{fontSize:'13px'}}>Student</div></button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <a className="dropdown-item" href="#">My Profile</a>
                  <a className="dropdown-item" href="#">Log out</a>
                  <a className="dropdown-item" href="#">Something</a>
                </div>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;