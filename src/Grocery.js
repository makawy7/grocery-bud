import Item from "./Item";

function Grocery({ list, setList, setAlert }) {
  return (
    <div className="grocery-container">
      <div className="grocery-list">
        {list.map((item, idx) => (
          <Item key={idx} item={item} setList={setList} setAlert={setAlert} />
        ))}
      </div>
      <button className="clear-btn">clear items</button>
    </div>
  );
}

export default Grocery;
