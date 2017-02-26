// - PACKAGES
import React, { Component } from 'react';
import { connect } from 'react-redux';

// - COMPONENTS
import Nav from './components/nav/Nav';

// - SCSS
import './reset.scss';
import './main.scss';

// - CLASS APP
class App extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="App">
        <Nav />
        {this.props.children}
      </div>
    )
  }

}

export default connect()(App)
