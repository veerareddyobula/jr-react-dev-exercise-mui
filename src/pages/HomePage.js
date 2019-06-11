import React, { useState }  from "react";
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from "prop-types";
import _ from "lodash";
import ItemCard from "../components/card/ItemCard";
import Grid from "@material-ui/core/Grid";
import Modal from "@material-ui/core/Modal";
import OptionsModal from "../components/modal/optionsModal"

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(4),
    outline: 'none',
    top: "12vh",
    left: "25%"
  },
}));

export default function HomePage({
  cartInfo,
  itemsList,
  itemOptions,
  addOrderToCart,
  removeOrderFromCart
}) {
  let items = [];
  if (itemsList && itemsList.items) {
    items = itemsList.items;
  }
  const [displayModal, setDisplayModal] = useState(false);
  const [selectedItemOptions, setSelectedItemOptions] = useState({})
  const classes = useStyles();
  return (
    <Grid container spacing={3}>
      {items.map(item => {
        const { item_id } = item;
        const cartItem = _.find(cartInfo.items, { item_id: item_id });
        const isAddedToCart = cartItem ? true : false;
        return (
          <Grid item xs={12} sm={6} md={4} key={item_id}>
            <ItemCard
              cardItem={item}
              itemOptions={itemOptions}
              isAddedToCart={isAddedToCart}
              addOrderToCart={addOrderToCart}
              removeOrderFromCart={removeOrderFromCart}
              setDisplayModal={setDisplayModal}
              setSelectedItemOptions={setSelectedItemOptions}
            />
          </Grid>
        );
      })}
      <Modal open={displayModal} onClose={() => setDisplayModal(false)}>
        <div className={classes.paper}>
          <OptionsModal options={selectedItemOptions} />
        </div>
      </Modal>
    </Grid>
  );
}

HomePage.propTypes = {
  cartInfo: PropTypes.shape({
    items: PropTypes.array
  }),
  itemsList: PropTypes.shape({
    items: PropTypes.array
  }),
  itemOptions: PropTypes.shape({
    items: PropTypes.array
  }),
  addOrderToCart: PropTypes.func,
  removeOrderFromCart: PropTypes.func,
  setDisplayModal: PropTypes.func
};
