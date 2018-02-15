import React, { Component } from 'react';
import Projects from './components/Projects';
import Homepage from './components/Homepage';
import { Footer, Navbar, NavItem } from 'react-materialize';
import { Switch, Route } from 'react-router';
import { NavLink, withRouter } from 'react-router-dom';
import './index.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav style={{ backgroundColor: '#212433' }}>
          <div className="nav-wrapper">
            <NavLink to="/">
              <img
                className="right"
                src="img/signature.png"
                alt="abe's personal signature"
                style={{ maxHeight: '100%', paddingTop: '5px' }}
              />
            </NavLink>

            <ul id="nav-mobile" className="left hide-on-med-and-down">
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/projects">Projects</NavLink>
              </li>
            </ul>
          </div>
        </nav>
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/projects" component={Projects} />
        </Switch>

        <Footer
          copyrights="© 2018 Abraham Rudy"
          moreLinks={
            <a className="grey-text text-lighten-4 right" href="#!">
              Built with React.js and MaterializeCSS
            </a>
          }
          // links={
          //   <ul>
          //     <li>
          //       <a className="grey-text text-lighten-3" href="#!">
          //         Link 3
          //       </a>
          //     </li>
          //     <li>
          //       <a className="grey-text text-lighten-3" href="#!">
          //         Link 4
          //       </a>
          //     </li>
          //   </ul>
          // }
          className="footer-box"
          id="footer-box"
        >
          <h5 className="white-text">We've spared no expense</h5>
          <p className="grey-text text-lighten-4">Life..uh, finds a way.</p>
        </Footer>
      </div>
    );
  }
}

export default withRouter(App);
