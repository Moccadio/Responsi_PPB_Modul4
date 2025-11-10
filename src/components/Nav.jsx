export default function Nav({ current, setPage }) {
  return (
    <nav>
      <div className="nav-container">
        <div className="brand">ROOKREAD ARCHIVE</div>
        <div className="menu">
          <button
            className={current === "home" ? "active" : ""}
            onClick={() => setPage("home")}
          >
            <span className="nav-icon"></span>
            <span className="nav-text">Home</span>
          </button>
          <button
            className={current === "books" ? "active" : ""}
            onClick={() => setPage("books")}
          >
            <span className="nav-icon"></span>
            <span className="nav-text">Books</span>
          </button>
          <button
            className={current === "profile" ? "active" : ""}
            onClick={() => setPage("profile")}
          >
            <span className="nav-icon"></span>
            <span className="nav-text">Profile</span>
          </button>
        </div>
      </div>
    </nav>
  );
}
