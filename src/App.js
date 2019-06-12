import React, {Component} from 'react';
//three style of UI
import './style/sample1.css';


class App extends Component {
  //When component use this.state
  constructor(props){
    //In order to use this so that we add props, super() is inheritance the parent constructor
    super(props);
    // To bind method's this in component,
    this.handleClick = this.handleClick.bind(this);
    this.handleOnChange = this.handleOnChange.bind(this);

    this.state={
      userName:'defaultValue',
      //input default
      inputText:'',
    }
  }
  // When user input the text, inputText will change immediately
  handleOnChange(e){
    //Get input value and use setState methods to get new content
    this.setState({inputText:e.target.value})
  }
  //When click submit button, userName of state will change new content
  handleClick(){

    // (1)
    this.setState(state=>({
      userName: state.inputText,
      inputText:'',
    }))
    // (2) refs
    // const text = this.textInput.value;
    // this.textInput.focus();
    // this.setState(state=>({
    //   userName:text,
    // }))
    // this.textInput.value ='';

    //(3)string refs
    // this.refs.textInput.focus();
    // const text = this.refs.textInput.value;
    // this.setState(state=>({
    //   userName:text,
    // }))
    // this.refs.textInput.value ='';
  }


  render() {
    return (
        //className equal to HTML class
        <div className="Frame-style">
          <div > Welcome {this.state.userName}</div>
          {/*(1)*/}
          <input className="Input-style" type="text" maxLength="50" value={this.state.inputText} onChange={e =>this.handleOnChange(e)} /><br/>
          {/*(2)*/}
          {/*<input className="Input-style" type="text" maxLength="50"  ref={ (input) => { this.textInput = input} } /><br/>*/}
          {/*(3)*/}
          {/*<input className="Input-style" type="text" maxLength="50"  ref="textInput" /><br/>*/}
          <button className="Submit-style" onClick={this.handleClick} >submit</button>
        </div>
    );
  }
}

export default App;