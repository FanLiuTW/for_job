import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { Link, Route, Switch, Redirect } from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';
import Question_list from "/Users/fan/for_job/frontend/app/question_list.js";

class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      categories:"",
      click: true,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  async componentDidMount() {
    const a = await axios({
      method: "get",
      mode: "no-cors",
      url: "/get_category",
      headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*"
      },
    }).catch(error => {return(error.response)});
    this.setState({categories: a.data.data});
  }

  handleClick() {
    const currentState = this.state.click;
    this.setState({click: !currentState});
  }

  render() {
  	return (
  		<div className="category">
        { 
          this.state.click &&
          Object.keys(this.state.categories).map((key, i) => (<Link to={`/${this.state.categories[key]}`} onClick={() => this.handleClick()} key={key}><div className="category_list">{this.state.categories[key]}</div></Link>))
        }
        <Switch>
          {Object.keys(this.state.categories).map((key, i) => (<Route key={key} path={`/${this.state.categories[key]}`} render={props => <Question_list text1={key} text2={this.state.categories[key]} {...props} />} />))}
          <Route exact path='/' render={() => <div></div>}/>
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
  	)
  }
}

export default Category;