import React, { Component } from 'react';

import Header from '../header/header';
import RandomPlanet from '../random-planet/random-planet'
import SwapiService from '../../services/swapi-service';
import ErrorBoundry from '../error-boundry/error-boundry';
import { SwapiServiceProvider } from '../../swapi-service-context/swapi-service-context';

import './app.css';
import PeoplePage from '../pages/people-page';
import PlanetPage from '../pages/planet-page';
import StarshipPage from '../pages/starship-page';

export default class App extends Component {

  swapiService = new SwapiService();

  onServiceChange = () => {
    console.log("change serivce");
  }

  render() {
    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={ this.swapiService }>
        <div className="container">
          <Header onServiceChange = { this.onServiceChange } />

          <RandomPlanet />

          <PeoplePage />
          <PlanetPage />
          <StarshipPage />

        </div>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  };
}