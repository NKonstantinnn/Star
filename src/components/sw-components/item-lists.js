import React from 'react';
import ItemList from '../item-list/item-list';
import withData  from '../../hoc-helper/with-data';
import withRenderItem from '../../hoc-helper/with-render-item';
import SwapiService from '../../services/swapi-service';

const swapiService = new SwapiService();

const {
    getAllPeople,
    getAllPlanets,
    getAllStarships
} = swapiService;

const renderName = ({ name }) => <span>{ name }</span>;
const renderNameAndModel = ({ name, model }) => <span>{ name } ({ model })</span>;

const PersonList = withData(
    withRenderItem(ItemList, renderName),
    getAllPeople
);

const PlanetList = withData(
    withRenderItem(ItemList, renderName),
    getAllPlanets
);

const StarshipList = withData(
    withRenderItem(ItemList, renderNameAndModel),
    getAllPeople
);

export {
    PersonList,
    PlanetList,
    StarshipList
};