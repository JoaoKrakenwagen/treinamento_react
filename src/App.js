import React, { Component } from 'react';
import logo from './logo.svg';
import Luis from './Home';
import {Route, Link} from 'react-router-dom';
import './App.css';

class App extends Component {
  state = {
    login: false,
    password: "123",
    display: {backgroundColor: "#fbb"},
    newColor: null,
  }

  changeColor = () => {
    var display = {backgroundColor: "#fbb"};
    display.backgroundColor = "#" + this.state.newColor;
    this.setState({display})
  }

  render() {
    const {password, login, display} = this.state;
    return (
      <div className="App">
          <Link to="/Luis"> Luis</Link>
        <Route exact path="/" render={ () =>
            <div>
              <input type="text"  onChange={(e) => this.setState({newColor: e.target.value})} />
              <button style={display} onClick={() => this.changeColor()}> oi</button>
            </div>
        } />
        <Route exact path='/:name' render={routeProps => <Luis login={login} {...routeProps}/>}/>
        {login === true && password === "123" &&
          <div>
            <h1>Hello world</h1>
          </div>
        }
      </div>
    );
  }
}

export default App;
