import "./App.css";
import React, { useState } from "react";
import MyList from "./Component/MyList";

const MyComponent = () => {
  const products = [
    { title: "Cabbage", id: 1 },
    { title: "Garlic", id: 2 },
    { title: "Apple", id: 3 },
  ];
  return (
    <>
      <div>
        <h1>My Component</h1>
        {<MyList list={products} />}
      </div>
    </>
  );
};

const MyComponent2 = () => {
  return (
    <>
      <div>
        <h1>My Component 2</h1>
      </div>
    </>
  );
};
const SwitchComponent: React.FC<{ handleClick: () => void }> = ({
  handleClick,
}) => {
  return (
    <>
      <div>
        <button onClick={handleClick}>toggle</button>
      </div>
    </>
  );
};
function App() {
  const [toggle, toggleComponent] = useState(true);
  function handleClick() {
    toggleComponent(!toggle);
  }
  return (
    <>
      <SwitchComponent handleClick={handleClick} />
      {toggle ? <MyComponent /> : <MyComponent2 />}
    </>
  );
}

export default App;
