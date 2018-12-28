import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

class Header extends Component {

    constructor(props){
        super(props);
        this.state = {isToggleOn:false};
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }))
    }
  render() {
      let menuActive = this.state.isToggleOn ? 'is-active' : '';
    return (      
        <div className="navbar has-shadow">
            <div className="container">
                <div className="navbar-brand">
                <a href="/" className="navbar-item">My company</a>
                <span className="navbar-burger" onClick={this.handleClick} >
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
                </div>
                <div className={"navbar-end navbar-menu " + menuActive} >
                    <Link to="/" className="navbar-item r-item">Home</Link>
                    <Link to="/" className="navbar-item r-item">Home</Link>
                    <Link to="/" className="navbar-item r-item">Home</Link>
                    <Link to="/faq" className="navbar-item r-item">FAQ</Link>
                    <div className="navbar-item">
                        <p className="control">
                            <a href="/" className="button is-primary is-outlined">
                            <span className="icon">
                                <i className="fa fa-download">
                                </i>
                            </span>
                            <span>Join now</span>
                            </a>
                        </p>
                    </div>
                </div>
            </div>
            </div>
      
    );
  }
}

export default Header;
