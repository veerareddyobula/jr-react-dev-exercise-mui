import React, { Component } from "react";
import { connect } from "react-redux";
import { removeOrderFromCart } from "../store/cart-info/Actions";
import CartPage from "../pages/CartPage";

class CartPageContainer extends Component {
  removeOrderFromCart = item => {
    this.props.removeOrderFromCart(item);
  };

  render() {
    const { cartInfo } = this.props;
    return (
      <CartPage
        cartInfo={cartInfo}
        removeOrderFromCart={this.removeOrderFromCart}
        {...this.props}
      />
    );
  }
}

function mapStateToProps({ cartInfo }) {
  return {
    cartInfo
  };
}

export default connect(
  mapStateToProps,
  {
    removeOrderFromCart
  }
)(CartPageContainer);
