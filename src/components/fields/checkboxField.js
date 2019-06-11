import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PropTypes from "prop-types";
import FormLabel from "@material-ui/core/FormLabel";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex"
  },
  formControl: {
    margin: theme.spacing(3)
  }
}));

export const CheckboxField = ({ item }) => {
  const classes = useStyles();
  const [checkboxFieldItems] = React.useState({});
  return (
    <div className={classes.root}>
      <FormControl component="fieldset" className={classes.formControl}>
        <FormLabel component="legend">{item.section_name}</FormLabel>
        <FormGroup>
          {item.choices.map((entity, fieldEntity) => {
            return (
              <FormControlLabel
                control={
                  <Checkbox
                    checked={checkboxFieldItems[entity.name]}
                    value={entity.price}
                  />
                }
                label={entity.name}
                key={`checkboxField_${fieldEntity}`}
              />
            );
          })}
        </FormGroup>
      </FormControl>
    </div>
  );
};

CheckboxField.propTypes = {
  item: PropTypes.shape({})
};
