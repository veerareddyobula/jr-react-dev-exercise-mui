import React, { Component } from "react";
import Container from "@material-ui/core/Container";
import Header from "./header/Header";
import PropTypes from "prop-types";

export default class App extends Component {
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <Header />
        <Container>{this.props.children}</Container>
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.any
};
