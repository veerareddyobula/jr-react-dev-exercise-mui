import React from "react";
import PropTypes from "prop-types";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";

export const RadioField = ({ item }) => {
  const [radioFieldItems, setRadioFieldItems] = React.useState({});
  return (
    <React.Fragment>
      <FormLabel component="legend">{item.section_name}</FormLabel>
      <RadioGroup aria-label={item.section_name} name={item.section_name}>
        {item.choices.map((entities, entityIndex) => {
          const fieldName = `radioButton_${entityIndex}`;
          radioFieldItems[fieldName] = !radioFieldItems[fieldName];
          return (
            <FormControlLabel
              key={fieldName}
              value={radioFieldItems[fieldName]}
              onChange={() => {
                radioFieldItems[fieldName] = !radioFieldItems[fieldName];
                setRadioFieldItems(radioFieldItems);
              }}
              control={<Radio color="primary" />}
              label={entities.name}
            />
          );
        })}
      </RadioGroup>
    </React.Fragment>
  );
};

RadioField.propTypes = {
  item: PropTypes.shape({})
};
