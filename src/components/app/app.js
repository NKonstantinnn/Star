import React, { Component } from 'react';

import Header from '../header/header';
import RandomPlanet from '../random-planet/random-planet'
import ErrorButton from '../error-button/error-button';
import ErrorIndicator from '../error-indicator/error-indicator';
import PeoplePage from '../people-page/people-page';

import './app.css';

export default class App extends Component {

  state = {
    hasError: false
  };

  componentDidCatch() {
    console.log('componentDidCatch()');
    this.setState({
      hasError: true
    });
  }

  render() {

    if(this.state.hasError) {
      return <ErrorIndicator />
    }

    return (
      <div className="container">
        <Header />
        <RandomPlanet />
        <ErrorButton />
        <PeoplePage />
        <PeoplePage />
        <PeoplePage />
      </div>
    );
  };
}