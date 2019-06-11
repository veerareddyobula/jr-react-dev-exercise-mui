import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchItemsList } from "../store/items-list/Actions";
import { fetchItemOptions } from "../store/item-options/Actions";
import {
  fetchCartOrders,
  addOrderToCart,
  removeOrderFromCart
} from "../store/cart-info/Actions";
import HomePage from "../pages/HomePage";

class HomePageContainer extends Component {
  componentDidMount() {
    this.props.fetchItemsList();
    this.props.fetchItemOptions();
    this.props.fetchCartOrders();
  }

  addOrderToCart = item => {
    this.props.addOrderToCart(item);
  };

  removeOrderFromCart = item => {
    this.props.removeOrderFromCart(item);
  };

  render() {
    const { itemsList, cartInfo, itemOptions } = this.props;
    return (
      <HomePage
        cartInfo={cartInfo}
        itemsList={itemsList}
        itemOptions={itemOptions}
        addOrderToCart={this.addOrderToCart}
        removeOrderFromCart={this.removeOrderFromCart}
      />
    );
  }
}

function mapStateToProps({ itemsList, itemOptions, cartInfo }) {
  return {
    itemsList,
    itemOptions,
    cartInfo
  };
}

export default connect(
  mapStateToProps,
  {
    fetchItemsList,
    fetchItemOptions,
    fetchCartOrders,
    addOrderToCart,
    removeOrderFromCart
  }
)(HomePageContainer);
