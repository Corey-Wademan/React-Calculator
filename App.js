import React from 'react';
import './App.css';
import { render } from '@testing-library/react';
import OutputComponent from './Components/Output';
import KeypadComponent from './Components/Keypad';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      result: ''
    };

    this.onClick = this.onClick.bind(this)
    this.calculate = this.calculate.bind(this)
    this.reset = this.reset.bind(this)
    this.backspace = this.backspace.bind(this)
  }

  onClick(button) {
    if (button === '='){
      this.calculate();
    } else if (button === 'CE') {
        this.backspace();
    } else if (button === 'C') {
        this.reset();
    } else {
        this.setState({
          result: this.state.result + button
        })
    }
  }

  calculate() {
    try {
      this.setState({
        result: (eval(this.state.result) || "" ) + ""
      });
    } catch (error) {
      this.setState({
        result: 'error'
      })
    }
  };

  reset() {
    this.setState({
      result: ""
    });
  };

  backspace() {
    this.setState({
      result: this.state.result.slice(0, -1)
    })
  }
  
  render() {
    return (
      <div>
        <div className='calculatorBody'>
          <h1>Simple Calculator</h1>
          <OutputComponent result={this.state.result} />
          <KeypadComponent onClick={this.onClick} />
        </div>
      </div>
      );
  }
}

export default App