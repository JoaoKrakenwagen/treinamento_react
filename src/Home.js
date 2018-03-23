import React, {Component} from 'react';
import {Navbar, NavItem} from 'react-materialize'
import {Link} from 'react-router-dom';


class Home extends Component {
  render(){
    return(
        <div>
          <Navbar right>
            <NavItem>Login</NavItem>
          </Navbar>
          <h1> {this.props.match.params.name}</h1>
        </div>
    )
  }
}
export default Home;
