//import Button from "./Button";
import styles from "./App.module.css";
import { useState, useEffect } from "react";

//const Memorized = memo();
function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onChange = (event) => setKeyword(event.target.value);
  const onClick = () => setValue((prev) => prev + 1);
  console.log("render");

  useEffect(() => {
    console.log("i run only one");
  }, []);
  useEffect(() => {
    if (keyword !== "") console.log("I run when keyword changes", keyword);
  }, [keyword]);
  useEffect(() => {
    console.log("I run when counter changes");
  }, [counter]);
  useEffect(() => {
    console.log("둘중하나만바껴도 바뀜");
  }, [keyword, counter]);
  return (
    <div>
      <input
        value={keyword}
        onChange={onChange}
        type="text"
        placeholder="search here..."
      />
      <h1 className={styles.title}>{counter}</h1>
      <button onClick={onClick}>Click me</button>
    </div>
  );
}

export default App;
