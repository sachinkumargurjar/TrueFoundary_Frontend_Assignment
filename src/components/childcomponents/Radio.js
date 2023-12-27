import React, { useContext } from "react";
import { FormContext } from "../App";
import Description from "./Descriptions";

function Radio(props) {
  props = props.edata;
  const { updateForm } = useContext(FormContext);

  const onChange = (e) => {
    updateForm(props.jsonKey, e.target.value);
  };

  return (
    <div style={{ display: "flex", flexWrap: "wrap"}}>
      {props.validate.options.map((e, index) => (
        <div key={index} style={{ flexBasis: "calc(50% - 10px)", boxSizing: "border-box" }}>
          <label
            style={{
              display: "block",
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #ccc",
              marginRight:"30px",
              boxSizing: "border-box",
              cursor: "pointer",
            }}
          >
            <input
              type="radio"
              name={props.jsonKey}
              value={e.value}
              onChange={onChange}
            />
            {e.label}
          </label>
          <Description description={e.description} />
        </div>
      ))}
    </div>
  );
}

export default Radio;
