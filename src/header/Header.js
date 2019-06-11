import React from "react";
import { connect } from "react-redux";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import LeftDrawer from "./LeftDrawer";

const styles = {
  root: {
    flexGrow: 1,
    marginBottom: 20
  },
  title: {
    textAlign: "left",
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  cartTag: {
    color: "#fff"
  }
};

class Header extends React.Component {
  state = {
    drawerOpen: false
  };

  changeDrawer = open => () => {
    this.setState({
      drawerOpen: open
    });
  };

  render() {
    const { cartInfo } = this.props;
    const totalCartItems =
      cartInfo && cartInfo.items ? cartInfo.items.length : 0;
    return (
      <div style={styles.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton
              style={styles.menuButton}
              onClick={this.changeDrawer(true)}
              color="inherit"
              aria-label="Menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h5" color="inherit" style={styles.title}>
              Veera [Remote Developers]
            </Typography>
            <a href="#/cart" style={styles.cartTag}>
              <Badge
                style={{ margin: "1rem" }}
                badgeContent={totalCartItems}
                color="primary"
              >
                <ShoppingCartIcon />
              </Badge>
            </a>
          </Toolbar>
        </AppBar>

        <LeftDrawer
          open={this.state.drawerOpen}
          onClose={this.changeDrawer(false)}
        />
      </div>
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
  null
)(Header);
