import React from 'react';
import PropTypes from 'prop-types';

import './item-list.css';

const ItemList = (props) => {

  const { data, onItemSelected, renderItem } = props;

  const items = data.map((item) => {
    const { id } = item;
    const label = renderItem(item);
    return (
      <li className="list-group-item"
          key={ id }
          onClick={ () => onItemSelected(id) }>
        { label }
      </li>
    ) 
  });

  ItemList.defaultProps = {
    onItemSelected: () => {}
  }

  ItemList.propTypes = {
    onItemSelected: PropTypes.func,
    data: PropTypes.arrayOf(PropTypes.object).isRequired,
    renderItem: PropTypes.func
  }

  return (
    <ul className="item-list list-group">
      { items }
    </ul>
  );
}

export default ItemList;

