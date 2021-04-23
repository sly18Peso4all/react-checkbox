import React, { useState } from "react";

function App() {
  const [dropdown, setDropdown] = useState("apple");
  const [isChecked, setIsChecked] = useState(false);
  const [radio, setRadio] = useState("apple");

  return (
    <form>
      <h2>Drop Down Value is : {dropdown}</h2>
      <h2>Checkbox is : {isChecked ? "True" : "False"}</h2>
      <h2>Radio button is : {radio}</h2>

      <select
        value={dropdown}
        onChange={(e) => {
          setDropdown(e.target.value);
        }}
      >
        <option value="apple">apple</option>
        <option value="orange">Orange</option>
        <option value="pineapple">Pineapple</option>
        <option value="mangoes">Mangoes</option>
      </select>

      <label>CheckBox : </label>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={(e) => {
          setIsChecked(e.target.checked);
        }}
      />
      <label>Apple : </label>
      <input
        type="radio"
        value="apple"
        checked={radio === "apple"}
        onChange={(e) => {
          setRadio(e.target.value);
        }}
      />
      <label>Orange : </label>
      <input
        type="radio"
        value="orange"
        checked={radio === "orange"}
        onChange={(e) => {
          setRadio(e.target.value);
        }}
      />
      <label>Birne: </label>
      <input
        type="radio"
        value="birne"
        checked={radio === "birne"}
        onChange={(e) => {
          setRadio(e.target.value);
        }}
      />
    </form>
  );
}

export default App;
