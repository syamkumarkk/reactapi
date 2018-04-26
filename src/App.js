import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyComponent from './MyComponent';
import List from './List';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: 'Enter name',
      items: ['vin','kum']
    };
  }
  onChange = (event) => {
      this.setState({ term: event.target.value });
    }

    onSubmit = (event) => {
      event.preventDefault();
      this.setState({
        term: 'Enter name of user',
        items: [...this.state.items, this.state.term]
      });
    }


    render() {
      return (
        <div className="App">
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to React</h1>
              </header>
              <p className="App-intro">
                      To do App
              </p>
          <p><form className="App" onSubmit={this.onSubmit}>
            <input value={this.state.term} onChange={this.onChange} />
            <button>Submit</button>
          </form>
        </p>
          <List items={this.state.items} />
          <MyComponent />
        </div>
      );
    }
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     isOn: true
  //   };
  // }
  // toggle = () => {
  //   this.setState({isOn: !this.state.isOn})
  // }
  //
  // render() {
  //   return (
  //     <div className="App">
  //       <header className="App-header">
  //         <img src={logo} className="App-logo" alt="logo" />
  //         <h1 className="App-title">Welcome to React</h1>
  //       </header>
  //       <p className="App-intro">
  //         To get started, edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <MyComponent name="vinayv!!!!1" />
  //       <div>
  //         <button onClick={this.toggle}>
  //           {this.state.isOn ? 'On' : 'Off'}
  //         </button>
  //         </div>
  //     </div>
  //   );
  // }
}

export default App;
