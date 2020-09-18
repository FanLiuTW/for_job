import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "",
      image2: "",
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.onChangeHandler2 = this.onChangeHandler2.bind(this);
  }

  async handleSubmit(event) {
    event.preventDefault();
    console.log(this.state.image);
    console.log(event.target);
    const formData = new FormData();
    formData.append('title', event.target[0].value);
    formData.append('major', event.target[1].value);
    formData.append('des', event.target[2].value);
    formData.append('ansdes', event.target[4].value);
    formData.append('image', this.state.image);
    formData.append('image2', this.state.image2);
    const a = await axios({
      method: "post",
      mode: "no-cors",
      url: "/submit_question",
      headers: {
        "Content-Type": "multipart/form-data;boundary=----WebKitFormBoundaryyrV7KO0BoCBuDbTL",
        "Access-Control-Allow-Origin": "*"
      },
      data: formData,
    }).catch(error => {return(error.response)});
    if (a.status == 200) {
      alert("Success submit new quesion!");
    }
  }

  onChangeHandler(event){
    const a = new Blob([event.target.files[0]], { type: 'image/png' })
    this.setState({image: a});
  }

  onChangeHandler2(event){
    const a = new Blob([event.target.files[0]], { type: 'image/png' })
    this.setState({image2: a});
  }

  render() {
  	return (
  		<div className="manage">
        <div>Add the question into database simplely</div>
        <div>

          <form onSubmit={this.handleSubmit}>
            <label className="input_label">
              Enter the title of question:<br/>
              <input type="text" className="input_form" name="title"/>
            </label><br/>

            <label className="input_label">
              Enter the major of question:<br/>
              <input type="text" className="input_form" name="major"/>
            </label><br/>

            <label className="input_label">
              Enter the description of question:<br/>
              <input type="text" className="input_form" name="des"/>
            </label><br/>

            <label className="input_label">
              If you need image to support the question, you can upload from here.<br/>
              <input type="file" onChange={this.onChangeHandler} className="input_form" name="image"/>
            </label><br/>

            <label className="input_label">
              Enter the answer description of question:<br/>
              <input type="text" className="input_form" name="des"/>
            </label><br/>

            <label className="input_label">
              If you need image to support the answer, you can upload from here.<br/>
              <input type="file" onChange={this.onChangeHandler2} className="input_form" name="image2"/>
            </label><br/>

            <input type="submit" value="Submit" className="btn btn_manage"/>
          </form>

        </div>
      </div>
  	)
  }
}

export default Add;