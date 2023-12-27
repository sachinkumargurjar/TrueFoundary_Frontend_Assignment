import React, { useContext } from "react";
import { FormContext } from "../App";
import Description from "./Descriptions";

function Select(props) {
  props = props.edata;
  const { updateForm } = useContext(FormContext);

  const onChange = (e) => {
    console.log("select changed" + e.target.value);
    updateForm(props.jsonKey, e.target.value);
  };
  console.log("Select: ", props);

  return (
    <div style={{ display: "flex", marginBottom: "10px" }}>
      <label style={{ flex: 1, marginRight: "10px" }}>{props.label} </label>
      <Description description={props.description} />
      <select
        style={{
          flex: 1,
          padding: "8px",
          borderRadius: "4px",
          border: "1px solid #ccc",
        }}
        name={props.jsonKey}
        onChange={(e) => onChange(e)}
        required={props.validate.required}
      >
        {props.validate.options.map((e) => (
          <option
            value={e.value}
            selected={e.value === props.validate.defaultValue}
          >
            {e.label}
          </option>
        ))}
      </select>
    </div>
  );
}
export default Select;
