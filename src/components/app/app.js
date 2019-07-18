import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

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
          <Router>
            <div className="container">
              <Header onServiceChange = { this.onServiceChange } />

              <RandomPlanet />
              <Route path="/" 
                render={() => <h2>Welcome to Star</h2>}
                exact />
              <Route path="/people" component={ PeoplePage } />
              <Route path="/planets" component={ PlanetPage } />
              <Route path="/starships" component={ StarshipPage } />
              
            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  };
}