import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import ArrowBack from "@material-ui/icons/ArrowBack";
import Clear from "@material-ui/icons/Clear";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3),
    overflowX: "auto"
  },
  table: {
    minWidth: 650
  },
  pullCenter: {
    display: "flex",
    justifyContent: "space-around",
    textDecoration: "none"
  },
  pullRight: {
    display: "flex",
    justifyContent: "flex-end",
    textDecoration: "none"
  },
  button: {
    margin: theme.spacing(1)
  }
}));

export default function CartPage({ cartInfo, removeOrderFromCart, ...props }) {
  const classes = useStyles();
  let items = [];
  if (!cartInfo || !cartInfo.items) {
    items = [];
  } else {
    items = cartInfo.items;
  }
  let totalOrderValue = 0;
  return (
    <Container maxWidth="md">
      <div className={classes.pullRight}>
        <Button
          size="small"
          className={classes.button}
          onClick={() => props.history.push("/")}
        >
          <ArrowBack className={classes.rightIcon} />
        </Button>
      </div>
      <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>Item</TableCell>
              <TableCell>Price</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map(row => {
              const { price } = row;
              totalOrderValue = totalOrderValue + price.base_unit;
              return (
                <TableRow key={row.item_id}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell>{price.base_unit}</TableCell>
                  <TableCell>
                    <Clear onClick={() => removeOrderFromCart(row)} />
                  </TableCell>
                </TableRow>
              );
            })}

            {items.length === 0 ? (
              <TableRow>
                <TableCell colSpan={3}>
                  <a href="#/" className={classes.pullCenter}>
                    Cart is empty! click here to Order
                  </a>
                </TableCell>
              </TableRow>
            ) : (
              <TableRow>
                <TableCell>Total</TableCell>
                <TableCell colSpan={2}>{totalOrderValue}</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </Paper>
    </Container>
  );
}

CartPage.propTypes = {
  cartInfo: PropTypes.shape({}),
  removeOrderFromCart: PropTypes.func
};
