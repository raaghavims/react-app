function Loader() {
  return (
    <div className="d-flex justify-content-center">
      <div
        className="spinner-border"
        style={{ position: "fixed", top: "50%", right: "50%" }}
        role="status"
      >
        <span className="sr-only"></span>
      </div>
    </div>
  );
}

export default Loader;
