export default function MyClubs() {
  return (
    <div>
      <div
        className="card"
        style={{
          width: "18rem",
          margin: "1rem",
        }}
      >
        <img
          src="https://picsum.photos/150/150"
          className="card-img-top"
          alt="My Image"
          style={{ height: "150px", objectFit: "cover" }}
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}
