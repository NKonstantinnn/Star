import React from 'react';
import ItemList from '../item-list/item-list';
import withData  from '../../hoc-helper/with-data';
import withRenderItem from '../../hoc-helper/with-render-item';
import withSwapiService from '../../hoc-helper/with-swapi-service';

const renderName = ({ name }) => <span>{ name }</span>;
const renderNameAndModel = ({ name, model }) => <span>{ name } ({ model })</span>;

const mapPersonMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPeople
    };
};

const mapPlanetMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPlanets
    };
};

const mapStarshipMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllStarships
    };
};

const PersonList = withSwapiService(
    withData(
        withRenderItem(ItemList, renderName)),
        mapPersonMethodsToProps);

const PlanetList = withSwapiService(
    withData(
        withRenderItem(ItemList, renderName)),
        mapPlanetMethodsToProps);

const StarshipList = withSwapiService(
    withData(
        withRenderItem(ItemList, renderNameAndModel)),
        mapStarshipMethodsToProps);

export {
    PersonList,
    PlanetList,
    StarshipList
};