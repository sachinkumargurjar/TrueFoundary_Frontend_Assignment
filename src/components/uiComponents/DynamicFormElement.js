import React from "react";
import Input from "../childcomponents/Input";
import Ignore from "../childcomponents/Ignore";
import Radio from "../childcomponents/Radio";
import Select from "../childcomponents/Select";
import Switch from "../childcomponents/Switch";
import Group from "../childcomponents/Group";
import Description from "../childcomponents/Descriptions";
import "./dynamic.css";

function DynamicFormElement(props) {
  const {
    sort,
    label,
    description,
    jsonKey,
    uiType,
    icon,
    level,
    placeholder,
    pattern,
  } = props.edata;
  const required = props.edata.validate.required;
  const immutable = props.edata.validate.immutable;
  const subParameters = props.edata.subParameters;

  switch (uiType) {
    case "Input":
      return (
        <div className="borders " style={{ display: 'flex'}}>
          <label style={{ flex: 1, marginRight: '10px' }}>{label}</label>
          <Description description={description} />
          <Input edata={props.edata} />
        </div>
      );
    case "Group":
      return (
        <div className="borders" >
          {" "}
          <label>{label}</label>
          <Description description={description} />
          <Group edata={props.edata} />
        </div>
      );
    case "Radio":
      return (
        <div className="borders">
          <Radio edata={props.edata} />
        </div>
      );
    case "Select":
      return (
        <div className="borders">
          <Select edata={props.edata} />
        </div>
      );
    case "Switch":
      return (
        <div className="borders">
          <Switch edata={props.edata} />
        </div>
      );
    case "Ignore":
      return <Ignore edata={props.edata} />;
  }
}
export default DynamicFormElement;
