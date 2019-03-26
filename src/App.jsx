import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faAt } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import Website from './components/Website';
import Navbar from './components/CustomNavbar';
import SideNav from './components/SideNavbar';
import './App.css';

library.add(fab, faAt, far)

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app-background">
          <SideNav />
          <Navbar />
          <Route exact path="/" component={Website} />
        </div>
      </Router>
    );
  }
}

export default App;
