/*
  This is navigation container - building nav bar on top
*/
import React, { Component } from 'react';
import './navigation.css';
import { Link, NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { a_logoff } from '../login/actions/actions';

class Navigation extends Component {
  i = 0;
  logoff = () => {
    this.props.dispatch(a_logoff());
  }; //dispatching a logoff action

  loginMenuAdmin = () => {
    // if user logged off -> not show Admin menu item
    if (this.props.user_id !== -1) {
      return (
        <li key={this.i++}>
          <NavLink to="/admin" activeClassName="navbar-active-link">
            Admin
          </NavLink>
        </li>
      );
    }
  };

  loginMenuLogoff = () => {
    //show logoff button in menu
    if (this.props.user_id !== -1) {
      return (
        <li key={this.i++}>
          <Link to="/" onClick={this.logoff}>
            Logoff
          </Link>
        </li>
      );
    }
  };

  loginUnlogged = () => {
    //show login button in menu, if we haven't login yet
    if (this.props.user_id === -1) {
      return (
        <li key={this.i++}>
          <NavLink to="/login" activeClassName="navbar-active-link">
            Login
          </NavLink>
        </li>
      );
    }
  };

  articleList = () => {
    // articles from DB
    const data = this.props.articles; // this comes from redux, set in routing.js in getArticleRouts()
    let result = []; //we returning an array to avoid parent tag
    data.forEach((article) => {
      result.push(
        <li key={this.i++}>
          <NavLink to={article.ArticleMatchPath} activeClassName="navbar-active-link">
            {article.ArticleTitle}
          </NavLink>
        </li>
      );
    });
    return result;
  };

  render() {
    const user = this.props.user_name;
    return (
      <header className="header">
        {/* <div className="logo"></div> */}
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>
        <ul className="menu">
          <li key={this.i++}>
            <NavLink exact to="/" activeClassName="navbar-active-link">
              Home
            </NavLink>
          </li>
          {this.articleList()} {/* Load nav bar items for dynamic articles */}
          <li key={this.i++}>
            <NavLink to="/price" activeClassName="navbar-active-link">
              Prices
            </NavLink>
          </li>
          {this.loginUnlogged() /*show login if you are un logged */}
          {this.loginMenuAdmin() /*show admin if you are logged */}
          {this.loginMenuLogoff() /*show logoff if you are logged */}
          <li key={this.i++} className="username">
            {user}
          </li>{' '}
          {/*show user name if you are logged */}
        </ul>
      </header>
    );
  }
}

function mapStateToProps(state) {
  // map state to props for redux
  return {
    user_name: state.login_reducer.user_name,
    user_id: state.login_reducer.user_id,
    articles: state.routing_navi_reducer.articles,
  };
}

export default connect(mapStateToProps)(Navigation); // redux connecting
