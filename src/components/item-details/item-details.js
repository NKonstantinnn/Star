import React, { Component } from 'react';

import './item-details.css';
import SwapiService from "../../services/swapi-service";
import Spinner from '../spinner/spinner';
import ErrorButton from '../error-button/error-button';

const Record = ({ item, field, label }) => {

  return (
    <li className="list-group-item">
      <span className="term">{ label }</span>
      <span>{ item[field] }</span>
    </li>
  );
}

export { Record };

export default class ItemDetails extends Component {

  swapiService = new SwapiService();

  state = {
    item: null,
    loading: true,
    image: null
  };

  componentDidMount() {
    this.updateItem();
  }

  componentDidUpdate(prevProps) {
    if (this.props.itemId !== prevProps.itemId) {
      this.setState({
        loading: true
      });
      this.updateItem();
    }
  }

  onItemWillLoad = () => {
    this.setState({
      loading: true
    });
  }

  onItemDidLoaded = (item) => {
    const { getImageUrl } = this.props;
    this.setState({
      item: item,
      image: getImageUrl(item),
      loading: false,
    });
  }

  updateItem() {
    const { itemId, getData } = this.props;
    if (!itemId) {
      return;
    }

    this.onItemWillLoad();
    getData(itemId)
      .then(this.onItemDidLoaded);
  }

  render() {

    const { item, loading, image } = this.state;
    
    if (!item) {
      return <span>Select a item from a list</span>;
    }

    const spinner = loading ? <Spinner /> : null;
    const records = React.Children.map(this.props.children, (child) => {
      return React.cloneElement(child, { item });
    })
    const content = !loading ? 
      (
        <ItemView 
          item={ item } 
          image={ image }
          records={ records } />
      ) : null;

    return (
      <div className="person-details card">
       { spinner }
       { content }
      </div>
    )
  }
}

const ItemView = ({ item, image, records }) => {

  return (
    <React.Fragment>
      <img className="person-image"
          src={ image }
          alt="character"/>

        <div className="card-body">
          <h4>{item.name}</h4>
          <ul className="list-group list-group-flush">
            { records }
          </ul>
          <ErrorButton />
        </div>
    </React.Fragment>
  );
}