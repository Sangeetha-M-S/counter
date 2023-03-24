//React class based components,state,props

import React,{Component} from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state={
      count: 0
    }
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  }

  decrement = () => {
    this.setState({ count: this.state.count - 1 });
  }

  render(){ 
    return (
      <div className="App">
        <button onClick={this.increment} className="btn1">+</button>
        <button onClick={this.decrement} className="btn2">-</button>
        <h2 className="count">{this.state.count}</h2>
      </div>
    );
  }
}

export default App;