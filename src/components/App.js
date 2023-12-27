import React from "react";
import "./App.css";
import DynamicFormElement from "./uiComponents/DynamicFormElement.js";
import { useState, useRef } from "react";
import Button from "@mui/material/Button";
import Swal from "sweetalert2";

export const FormContext = React.createContext(null);


function component(ele) {
  return <DynamicFormElement edata={ele} />;
}

function App() {
  const [form, setForm] = useState({});
  const [parsedJson, setParsedJson] = useState([]);
  const inputRef = useRef(null);

  // const openAlert = (e) => {
  //       e.preventDefault();
  //       Swal.fire({
  //         title: "Form Data",
  //         text: JSON.stringify(form, null, 2),
  //         confirmButtonText: "OK",
  //       });
  //     };

  const handleSubmit = () => {
        const json = parseJson(inputRef.current.value);
        setParsedJson(json);
        setForm({});
      };

  const updateForm = (jsonKey, value) => {
    const newForm = { ...form, [jsonKey]: value };
    console.log("new form: ", newForm);
    setForm(newForm);
  };

  const parseJson = (x) => {
    try {
      return JSON.parse(x);
    } catch (e) {
      alert("Incorrect json: " + e.message);
      return [];
    }
  };

  return (
    <div className="flex-container">
      <div className="input">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <label style={{ marginBottom: "10px" }}>JSON Editor</label>
          <Button
            style={{ marginBottom: "10px", maxWidth: "80px" }}
            variant="contained"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </div>
        <textarea ref={inputRef} className="json-input" />
      </div>


      <div>
      <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <label>UI Output</label>
          {/* <Button variant="contained" onClick={openAlert}>
            Submit
          </Button> */}
        </div>
        <div className="output">
          <FormContext.Provider value={{ form: form, updateForm: updateForm }}>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                Swal.fire({
                  title: "Form Data",
                  text: JSON.stringify(form, null, 2),
                  confirmButtonText: "OK",
                });
              }}
            >
              {parsedJson.map(component)}
              <input type="submit" value="Submit" />
            </form>
          </FormContext.Provider>
        </div>
      </div>
    </div>
  );
}

export default App;

