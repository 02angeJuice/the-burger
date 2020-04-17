import React, { Component } from 'react';
import PropTypes from 'prop-types';

import classes from './Ingredient.css';

class Ingredient extends Component {
  render() {
    let ingredient = null;

    switch (this.props.type) {
      case 'BREAD_BOTTOM':
        ingredient = <div className={classes.BreadBottom}></div>;
        break;
      case 'BREAD_TOP':
        ingredient = (
          <div className={classes.BreadTop}>
            <div className={classes.Seeds1}></div>
            <div className={classes.Seeds2}></div>
          </div>
        );
        break;
      case 'MEAT':
        ingredient = <div className={classes.Meat}></div>;
        break;
      case 'CHEESE':
        ingredient = <div className={classes.Cheese}></div>;
        break;
      case 'BACON':
        ingredient = <div className={classes.Bacon}></div>;
        break;
      case 'SALAD':
        ingredient = <div className={classes.Salad}></div>;
        break;
      default:
        ingredient = null;
    }

    return ingredient;
  }
}

Ingredient.propTypes = {
  type: PropTypes.string.isRequired,
};

export default Ingredient;
