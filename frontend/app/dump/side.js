import React from 'react';
import ReactDOM from 'react-dom';

class Side extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
  	return (
  		<div className="side">

        {/* Your image at side */} 
        <img style={{position: "relative", top: "25%", left: "12%", height: "270px", width: "auto"}} src={require('/Users/fan/for_job/frontend/img/myimage.jpg')}/>
        
        {/* The content of side, including three block School, Skill and Contact*/}

        {/* School */}
        <div className="side_block">
          <div className="side_title">
            <span className="side_title_text">
              School
            </span>
          </div>
          <div className="side_content">
            <div>Master of IT, Stream: AI, UNSW</div>
            <div> - Feb 2018 – Dec 2019</div>
            <br></br>
            <div>Bachelor of science, <br></br> College of Electrical Engineering and Computer Science, <br></br>Chun Yuan Christian University</div>
            <div> - Sep 2013 – Jun 2017</div>
          </div>
        </div>

        {/* Skill */}
        <div className="side_block">
          <div className="side_title">
            <span className="side_title_text">
              Technical Skill
            </span>
          </div>
          <div className="side_content">
            <li>C & C++</li>
            <li>Python && Flask</li>
            <li>.NET Core</li>
            <li>HTML && JavaScript</li>
            <li>React</li>
            <li>MySql && PostgreSQL</li>
          </div>
        </div>

        {/* Contact */}
        <div className="side_block">
          <div className="side_title">
            <span className="side_title_text">
              Contact
            </span>
          </div>
          <div className="side_content">
            <a href="https://www.linkedin.com/feed/" style={{float: "left", paddingRight: "10px"}}><i class="fa fa-linkedin-square" style={{fontSize: "35px"}}></i></a>
            <a href="https://www.instagram.com/fan910248/" style={{float: "left", paddingRight: "10px"}}><i class="fa fa-instagram" style={{fontSize: "35px"}}></i></a>
            <a href="https://www.facebook.com/profile.php?id=100000482967602" style={{float: "left", paddingRight: "10px"}}><i class="fa fa-facebook-square" style={{fontSize: "35px"}}></i></a>
          </div>
        </div>
      </div>
  	)
  }
}

export default Side;