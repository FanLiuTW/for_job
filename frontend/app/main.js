import React from 'react';
import ReactDOM from 'react-dom';
import ImageMapper from 'react-image-mapper';
import axios from 'axios';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expand: true,
      url: "",
      des: "",
      ansdes: "",
      ansurl: "",
    };
    this.handleClick = this.handleClick.bind(this);
  }
  
  async componentDidMount() {
    const a = await axios({
      method: "post",
      mode: "no-cors",
      url: "/get_question",
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      "data": this.props.text,
    }).catch(error => {return(error.response)});
    this.setState({url: a.data.data.image});
    this.setState({des: a.data.data.des});
  }

  async handleClick() {
    const a = await axios({
      method: "post",
      mode: "no-cors",
      url: "/get_question_answer",
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      "data": this.props.text,
    }).catch(error => {return(error.response)});
    this.setState({ansurl: a.data.data.image});
    this.setState({ansdes: a.data.data.answerdes});
    const currentState = this.state.expand;
    this.setState({expand: !currentState});

  }

  render() {
  	return (
  		<div className="quiz">
        <div className="question">
          <div>{this.state.des}</div>
          {
            this.state.url &&
            <img className="question_image" src={`data:image/png;base64,${this.state.url}`} />
          }
        </div>
        <div className="student_answer">
          <div>Your Answer:</div>
          <input className="student_answer_box" type="text"></input>
          <button type="button" className="btn btn_manage">Submit</button>
        </div>
        <div className="real_answer" onClick={() => this.handleClick()}>
          <div className="expand_ans">Expand to see the answer.<i className={this.state.expand ? "fa fa-angle-up" : "fa fa-angle-down"} style={{float: "right"}}></i></div>
          {
            !this.state.expand &&
            <div className="real_ans_content">
              {
                this.state.ansurl &&
                <img className="question_image" src={`data:image/png;base64,${this.state.ansurl}`} />
              }
              <div>{this.state.ansdes}</div>
            </div>
          }
        </div>
      </div>
    )
  }
}

export default Main;


// <img className="question_image" src={require(`${this.state.url}`)}/>



