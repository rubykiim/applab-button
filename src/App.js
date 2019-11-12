import React, { useState } from "react";
import "./App.css";

function App() {
  const [active, setActive] = useState("");

  function colorChange(e) {
    let id = e.target.id;
    setActive(id);
  }

  return (
    <div className="App">
      <div className="Buttons">
        <Button
          isActive={active == "First Button" ? true : false}
          nthbutton={colorChange}
          name="First Button"
        />
        <Button
          isActive={active == "Second Button" ? true : false}
          nthbutton={colorChange}
          name="Second Button"
        />
        <Button
          isActive={active == "Third Button" ? true : false}
          nthbutton={colorChange}
          name="Third Button"
        />
      </div>
      <div>
        <ContentBoxes id={active} />
      </div>
    </div>
  );
}

function Button(props) {
  return (
    <div>
      <button
        className={props.isActive ? "color" : ""}
        id={props.name}
        onClick={props.nthbutton}>
        {props.name}
      </button>
    </div>
  );
}

function ContentBoxes(props) {
  return (
    <div className="contentbox">
      <p className="content">You have selected: {props.id}</p>
    </div>
  );
}

export default App;
