export default function Nav({ current, setPage }) {
  return (
    <nav>
      <div className="nav-container">
        <div className="brand">CAMP ROOKREAD ARCHIVE</div>
        <div className="menu">
          <button
            className={current === "home" ? "active" : ""}
            onClick={() => setPage("home")}
          >
            Home
          </button>
          <button
            className={current === "books" ? "active" : ""}
            onClick={() => setPage("books")}
          >
            Books
          </button>
          <button
            className={current === "profile" ? "active" : ""}
            onClick={() => setPage("profile")}
          >
            Profile
          </button>
        </div>
      </div>
    </nav>
  );
}
