import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: "100%"
  },
  media: {
    height: 140
  },
  desc: {
    overflow: "hidden",
    height: "4rem",
    textOverflow: "eclipse"
  },
  button: {
    margin: theme.spacing(1)
  },
  dFlex: {
    display: "flex",
    justifyContent: "space-between",
    flexWrap: "wrap"
  }
}));

export default function MediaCard({
  cardItem,
  itemOptions,
  isAddedToCart,
  addOrderToCart,
  removeOrderFromCart,
  setDisplayModal,
  setSelectedItemOptions
}) {
  const classes = useStyles();
  const imageUrl = cardItem.picture_url;
  const imageTitle = cardItem.name;
  const desc = cardItem.description;
  const price = cardItem.price;
  const { options } = itemOptions;
  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={imageUrl}
          title={imageTitle}
          alt={imageTitle}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Lizard
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.desc}
          >
            {desc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions className={classes.dFlex}>
        {options[cardItem.item_id] && options[cardItem.item_id].length > 0 ? (
          <Button
            variant="contained"
            size="small"
            className={classes.button}
            onClick={() => {
              setDisplayModal(true);
              setSelectedItemOptions({
                item: cardItem,
                selectedItemOptions: options[cardItem.item_id]
              });
            }}
          >
            Options
          </Button>
        ) : (
          <div />
        )}
        {isAddedToCart ? (
          <Button
            variant="contained"
            size="small"
            color="secondary"
            className={classes.button}
            onClick={() => removeOrderFromCart(cardItem)}
          >
            Remove Order @ {price ? price.base_unit : ""}{" "}
            {price ? price.iso_4217 : ""}
          </Button>
        ) : (
          <Button
            variant="contained"
            size="small"
            color="primary"
            className={classes.button}
            onClick={() => addOrderToCart(cardItem)}
          >
            Add Order @ {price ? price.base_unit : ""}{" "}
            {price ? price.iso_4217 : ""}
          </Button>
        )}
      </CardActions>
    </Card>
  );
}

MediaCard.propTypes = {
  cardItem: PropTypes.shape({
    items: PropTypes.array
  }),
  itemOptions: PropTypes.shape({
    items: PropTypes.array
  }),
  isAddedToCart: PropTypes.bool,
  addOrderToCart: PropTypes.func,
  removeOrderFromCart: PropTypes.func,
  setDisplayModal: PropTypes.func,
  setSelectedItemOptions: PropTypes.func
};
