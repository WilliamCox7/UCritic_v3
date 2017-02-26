// - PACKAGES
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router';
import theaterSeat from '../../src/chair.png';
import blogPencil from '../../src/pencil.png';
import profilePic from '../../src/placeholder.jpg';
// import $ from 'jquery';
import './nav.scss';

// - CLASS NAV
class Nav extends Component {

  constructor(props) {
    super(props)
    this.state = {
      showMenu: false
    }
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  toggleMenu() {
    this.setState({
      showMenu: !this.state.showMenu
    });
  }

  render() {
    return(
      <div className="nav">
        <div className="header-back"></div>
        <div className="banner-corners">
          <div className="banner-corner">
            <div id="left-banner-corner"></div>
          </div>
          <div className="banner-corner">
            <div id="right-banner-corner"></div>
          </div>
        </div>
        <Link to="/" className="ucritic-font" id="ucritic-logo">
          <span className="first-letter">U</span>Critic
        </Link>
        <div className="nav-links">
          <Link to="/theater">
            <img src={theaterSeat} /><p>Theater</p>
          </Link>
          <Link to="/blog">
            <img src={blogPencil} /><p>Blog</p>
          </Link>
          <Link to="/profile" className="link-profile">
            <img src={profilePic} /><p>Profile</p>
          </Link>
        </div>
        <div className="ham-menu" onClick={this.toggleMenu}>
          <div className="ham-line"></div>
          <div className="ham-line"></div>
          <div className="ham-line"></div>
        </div>
        <form>
          <input autoComplete="off" type="text" placeholder="Search for a movie or TV show" />
        </form>
        {this.state.showMenu ? (
          <div className="menu-links" onClick={this.toggleMenu}>
            <Link to="/theater">
              <img src={theaterSeat} /><p>Theater</p>
            </Link>
            <Link to="/blog">
              <img src={blogPencil} /><p>Blog</p>
            </Link>
            <Link to="/profile" className="link-profile">
              <img src={profilePic} /><p>Profile</p>
            </Link>
          </div>
        ) : null}
      </div>
    )
  }
}

export default connect()(Nav);
