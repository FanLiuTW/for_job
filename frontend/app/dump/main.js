import React from 'react';
import ReactDOM from 'react-dom';
import { ProgressBar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      show_about: true,
      show_exp: false,
    };
    this.getDate = this.getDate.bind(this);
    this.getProgress = this.getProgress.bind(this);
    this.getAbout = this.getAbout.bind(this);
    this.getExp = this.getExp.bind(this);
  }
  
  getDate(){
    var currentdate = new Date();
    const startDate  = '2017-01-01';
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; 
    var yyyy = today.getFullYear();
    if(dd<10) {
      dd='0'+dd;
    } 

    if(mm<10) {
      mm='0'+mm;
    }
    today = yyyy + '-' + mm + '-' + dd;
    const diffInMs   = new Date(today) - new Date(startDate);
    const diffInDays = diffInMs / (1000 * 60 * 60 * 24);
    return diffInDays;
  };

  getProgress() {
    var day = this.getDate();
    const progress = (day / 1825) * 100;
    return progress;
  }

  getAbout() {
    console.log("hihi");
    const currentState = this.state.show_about;
    if (!currentState) {
      const currentopen = this.state.show_exp;
      this.setState({show_exp: !currentopen});
      this.setState({show_about: !currentState});
    }
  }

  getExp() {
    console.log("yoyo");
    const currentState = this.state.show_exp;
    if (!currentState) {
      const currentopen = this.state.show_about;
      this.setState({show_about: !currentopen});
      this.setState({show_exp: !currentState});
    }
  }

  render() {
  	return (
  		<div className="main">
        <div style={{fontFamily: "'Playfair Display', serif", fontSize: "30px", color: "#3f4652", paddingTop: "37px", paddingLeft: "6px", letterSpacing: "1px", float: "left"}}>
          Fan, Liu(Paul)
          <a href="https://www.google.com/maps/place/新南威爾斯州雪梨/@-33.8473551,150.6511006,10z/data=!3m1!4b1!4m5!3m4!1s0x6b129838f39a743f:0x3017d681632a850!8m2!3d-33.8688197!4d151.2092955">
            <i class="fa fa-map-marker" style={{paddingLeft: "20px", color: "grey", fontSize: "20px"}}>
              Sydney
            </i>
          </a>
          <div style={{fontSize: "17px", color: "#5e7186", paddingBottom: "15px"}}>Software Developer</div>
          <div style={{fontSize: "17px", color: "#5e7186", paddingBottom: "20px"}}>Already program for {this.getDate()} days.</div>
          <ProgressBar now={this.getProgress()} label={`${this.getDate()} days(out of 5 years)`} style={{height:"28px"}} animated striped variant="success"/>
          <div className="main_content">
            <button type="button" className="btn btn_main" onClick={() => this.getAbout()}>About</button>
            <button type="button" className="btn btn_main" onClick={() => this.getExp()}>Experience</button>
          </div>
          {
            this.state.show_about && 
              <div className="main_about_exp">
                <div className="mae_content_title">
                  Contact Information
                </div>
                <div className="mae_content">
                  Phone: <a href="tel:0434378689" style={{paddingLeft: "53px", fontSize: "17px"}}>0434378689</a>
                </div>
                <div className="mae_content">
                  Address: <a href="https://www.google.com/maps/place/1%2F25-27+Kensington+Rd,+Kensington+NSW+2033/@-33.9081261,151.219486,17z/data=!3m1!4b1!4m5!3m4!1s0x6b12b1edf9231901:0x5f453fea7d15f1cc!8m2!3d-33.9081306!4d151.22168" style={{paddingLeft: "36px", fontSize: "17px"}}>1/25-27 Kensington Rd, Kensington NSW 2033</a>
                </div>
                <div className="mae_content">
                  Email: <a href="mailto: fan910248@gmail.com" style={{paddingLeft: "60px", fontSize: "17px"}}>fan910248@gmail.com</a>
                </div>
                <div className="mae_content">
                  Github: <a href="https://github.com/FanLiuTW" style={{paddingLeft: "7%", fontSize: "17px"}}>https://github.com/FanLiuTW</a>
                </div>
                <div className="mae_content_title">Basic Information</div>
                <div className="mae_content">
                  Birthday: <a style={{paddingLeft:"35px"}}>22/04/1995</a>
                </div>
                <div className="mae_content">
                  Gender: <a style={{paddingLeft:"46px"}}>Male</a>
                </div>
              </div>
          }
          {
            this.state.show_exp && 
              <div className="main_about_exp">
                <div className="mae_content_title">
                  Project
                </div>

                <div className="mae_content">

                  Kaggle Competition<br></br>New York City Taxi Fare Prediction
                  <div style={{float: "right", fontSize: "15px"}}>July 2019 – Sep 2019</div>
                  <ul style={{fontSize:"17px"}}>
                    <li className="mae_exp_li">
                      Hosted in partnership with Google Cloud and Coursera
                    </li>
                    <li className="mae_exp_li">
                        Develop a model predicting the fare amount (inclusive of tolls) for a taxi ride in
                        New York City given the pickup and drop off locations
                    </li>
                    <li className="mae_exp_li">
                      Clean the data before dumping the data into model by visualizing the data and
                      get rid of the low correlation elements
                    </li>
                    <li className="mae_exp_li">
                      Using the two different model, deep learning by implementing normal neural
                      network and machine learning by implementing LGBM
                    </li>
                    <li className="mae_exp_li">
                      The model is built by Keras, sklearn and Xgboost
                    </li>
                  </ul>

                  Capstone Project 1<br></br>Intelligent Assistant for<br></br>electronic Logbook in Radiology
                  <div style={{float: "right", fontSize: "15px"}}>Sep 2019 – Dec 2019</div>
                  <ul style={{fontSize:"17px"}}>
                    <li className="mae_exp_li">
                      Designing a web application which can provide the medicine student or
                      teacher to store and manipulate their medical case of illness
                    </li>
                    <li className="mae_exp_li">
                        Software architecture includes front end, back end and database
                    </li>
                    <li className="mae_exp_li">
                      Use machine learning method to extract the essential information from
                      provided reports
                    </li>
                    <li className="mae_exp_li">
                      Design a Chat Bots to guide the user and give some suggestions, also
                      provide the basic data manipulation same as web application provided
                    </li>
                  </ul>

                </div>
              </div>
          }
        </div>
      </div>
  	)
  }
}

export default Main;