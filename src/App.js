import { useState, useRef, useEffect } from "react";
import Item from "./Item";
import Alert from "./Alert";

function App() {
  const [list, setList] = useState(() => {
    const localList = JSON.parse(localStorage.getItem("list"));
    return localList || [];
  });
  const inputRef = useRef(null);
  const editRef = useRef(null);
  const [alert, setAlert] = useState(null);
  const [action, setAction] = useState("submit");

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

  const editListItem = (e) => {
    e.preventDefault();
    const currentItem = editRef.current;

    if (inputRef.current.value === "") {
      setAlert("error");
    } else {
      setList(
        list.map((item) => {
          if (item === currentItem) {
            return inputRef.current.value;
          }
          return item;
        })
      );
      setAlert("edited");
      setAction("submit");
      inputRef.current.value = "";
    }
  };

  const clearAll = () => {
    setList([]);
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

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

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
          {action === "submit" ? (
            <button onClick={addToList} type="submit" className="submit-btn">
              submit
            </button>
          ) : (
            <button onClick={editListItem} type="submit" className="submit-btn">
              Edit
            </button>
          )}
        </div>
      </form>
      {list.length ? (
        <div className="grocery-container">
          <div className="grocery-list">
            {list.map((item, idx) => (
              <Item
                key={idx}
                item={item}
                setList={setList}
                setAlert={setAlert}
                setAction={setAction}
                inputRef={inputRef}
                editRef={editRef}
              />
            ))}
          </div>
          <button onClick={clearAll} className="clear-btn">
            clear items
          </button>
        </div>
      ) : (
        ""
      )}
    </section>
  );
}

export default App;
