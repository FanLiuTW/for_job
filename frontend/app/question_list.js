import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link, Route, Switch, Redirect } from 'react-router-dom';
import Main from "/Users/fan/for_job/frontend/app/main.js"

class Questionlist extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      questions: {},
    };
  }

  async componentDidMount() {
    const a = await axios({
      method: "post",
      mode: "no-cors",
      url: "/get_category_question",
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
      "data": this.props.text1,
    }).catch(error => {return(error.response)});
    this.setState({questions: a.data.data});
  }

  render() {
  	return (
  		<div>
        <div className="question_list_container">
          {Object.keys(this.state.questions).map((key, i) => (<Link to={`/${this.props.text2}/${key}`} key={key}><div className="question_list">{key}. {this.state.questions[key]}</div></Link>))}
        </div>
        <Switch>
          {Object.keys(this.state.questions).map((key, i) => (<Route key={key} path={`/${this.props.text2}/${key}`} render={props => <Main text={key} {...props} />} />))}
        </Switch>
      </div>
  	)
  }
}

export default Questionlist;