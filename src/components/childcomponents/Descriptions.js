import React from "react";

import "../uiComponents/dynamic.css";
import { FcInfo } from "react-icons/fc";

function Description(props) {
  return (
    <div class="tooltip ">
      {props.description != "" ? (
        <div>
          <FcInfo />
        </div>
      ) : (
        ""
      )}{" "}
      <span class="tooltiptext">{props.description}</span>
    </div>
  );
}

export default Description;
