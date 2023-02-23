import { useRef } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";

function Item({ item, setList, setAlert, setAction, inputRef, editRef }) {
  const itemRef = useRef(null);
  const removeItem = () => {
    setList((prev) =>
      prev.filter((item) => item !== itemRef.current.textContent)
    );
    setAlert("removed");
  };

  const editItem = () => {
    inputRef.current.value = itemRef.current.textContent;
    editRef.current = itemRef.current.textContent;
    setAction("edit");
  };

  return (
    <article className="grocery-item">
      <p ref={itemRef} className="title">
        {item}
      </p>
      <div className="btn-container">
        <button onClick={editItem} type="button" className="edit-btn">
          <FaEdit />
        </button>
        <button onClick={removeItem} type="button" className="delete-btn">
          <FaTrash />
        </button>
      </div>
    </article>
  );
}

export default Item;
