import React from "react";
import PropTypes from "prop-types";
import { RadioField } from "../fields/radioField";
import { CheckboxField } from "../fields/checkboxField";

export default function OptionsModal({ options }) {
  const { selectedItemOptions } = options;
  return (
    <div>
      {selectedItemOptions.map((item, itemIndex) => {
        if (item.uitype === "RADIO") {
          return <RadioField item={item} key={`radioFieldItem_${itemIndex}`} />;
        } else if (item.uitype === "CHECKBOX") {
          return (
            <CheckboxField item={item} key={`checkboxFieldItem_${itemIndex}`} />
          );
        }
        return <div key={`unSupportedUiType_${itemIndex}`}>{item.uitype} is not supported</div>;
      })}
    </div>
  );
}

OptionsModal.propTypes = {
  options: PropTypes.shape({})
};
