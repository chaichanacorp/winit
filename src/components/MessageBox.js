import React, {Component} from 'react';
import trim from 'trim';
class MessageBox extends Component {
  constructor(props){
    super(props);
    this.onChange = this.onChange2.bind(this);
    this.onKeyup = this.onKeyup.bind(this);
    this.state = {
      message: ''
    };
  }
  onChange2(e){
    this.setState({
      message: e.target.value
    });
  }


  onKeyup(e){
    if(e.keyCode === 13 && trim(e.target.value) !== ''){
      e.preventDefault();
      let dbCon = this.props.db.database().ref('/messages');
      dbCon.push({
        message: trim(e.target.value),
        age: trim("18"),
        name: trim("jack")
      });
      this.setState({
        message: ''
      });
    }
  }
render() {
    return (
      <form>
       <textarea 
          className="textarea"
          placeholder="Type a message"
          cols="100"
          onChange={this.onChange}
          onKeyUp={this.onKeyup}
          value={this.state.message}>
       </textarea>
      </form>
    )
  }
}
export default MessageBox