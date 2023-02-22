function Alert({ alert }) {
  return (
    <>
      {alert === "error" ? (
        <p className="alert alert-danger">Please enter a value.</p>
      ) : (
        ""
      )}
      {alert === "success" ? (
        <p className="alert alert-success">Item Added!</p>
      ) : (
        ""
      )}
      {alert === "removed" ? (
        <p className="alert alert-danger">Item Deleted!</p>
      ) : (
        ""
      )}
      {alert === "changed" ? (
        <p className="alert alert-success">Item Updated!</p>
      ) : (
        ""
      )}
    </>
  );
}

export default Alert;
