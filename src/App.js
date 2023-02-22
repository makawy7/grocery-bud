import { useState, useRef, useEffect } from "react";
import Grocery from "./Grocery";
import Alert from "./Alert";

function App() {
  const [list, setList] = useState([]);
  const inputRef = useRef(null);
  const [alert, setAlert] = useState(null);

  const addToList = (e) => {
    e.preventDefault();
    if (inputRef.current.value === "") {
      setAlert("error");
    } else {
      setAlert("success");
      setList([...list, inputRef.current.value]);
      inputRef.current.value = "";
    }
  };

  useEffect(() => {
    const time = setTimeout(() => {
      setAlert(null);
    }, 2000);
    return () => {
      clearTimeout(time);
    };
  }, [alert]);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  console.log(list);
  return (
    <section className="section-center">
      <Alert alert={alert} />
      <form className="grocery-form">
        <h3>Grocery Bud</h3>
        <div className="form-control">
          <input
            type="text"
            ref={inputRef}
            className="grocery"
            placeholder="e.g. eggs"
          />
          <button onClick={addToList} type="submit" className="submit-btn">
            submit
          </button>
        </div>
      </form>
      {list.length ? (
        <Grocery list={list} setList={setList} setAlert={setAlert} />
      ) : (
        ""
      )}
    </section>
  );
}

export default App;
