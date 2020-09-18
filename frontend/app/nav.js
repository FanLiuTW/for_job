import React from 'react';
import ReactDOM from 'react-dom';

class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
  	return (
  		<div className="profile_nav">
        <img style={{position: "relative", top: "16%", left: "5%", height: "70px", float: "left"}} src={require('/Users/fan/for_job/frontend/img/mylogo.png')}/>
        <div style={{position: "relative", top: "34%", left: "6%", float: "left", fontFamily: "'Quicksand', sans-serif", fontSize: "22px", color: "#14243d"}}>General Quiz</div>
      </div>
  	)
  }
}

export default Nav;

// <div style={{position: "relative", top: "34%", right: "10%", float: "right", fontFamily: "'Quicksand', sans-serif", fontSize: "22px", color: "#14243d"}}>
//           <button type="button" className="btn btn_manage">Manage</button>
//         </div>