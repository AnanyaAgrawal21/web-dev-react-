import React, { useState } from "react";
import style from "./css/Menu.module.css";
import Artstyle from "./css/Article.module.css";
// import styled from "styled-components"; ❌ (optional)
// import styled from "@emotion/styled"; ❌ (optional)
import css 

function Article() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [age, setAge] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
    console.log(count);
  };

  const handleDecrement = () => {
    setCount(count - 1);
    console.log(count);
  };

  return (
    <div>
      <h2>Article</h2>
      <p>Lorem ipsum dolor sit</p>

      <h3>{count}</h3>

      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>

      <button className={Artstyle.btn} onClick={handleIncrement}>
        Increment
      </button>

      <button>Click Me</button>
      <button style={{ color: "red" }}>Click Again</button>
    </div>
  );
}

export default Article 

const Button = styled.button`
  background-color: ${props=>props.red ? "red" : "pink"}:
  color: white;
  border-radius: 10px;
  height: 30px;
  width: 100px;