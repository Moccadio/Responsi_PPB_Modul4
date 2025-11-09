import React from "react";
import "../index.css";

export default function Home({ setPage }) {
  return (
    <div className="home-container">
      {/* === Background Animasi Buku === */}
      <div className="floating-books">
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className={`book-icon book-${i + 1}`}>📖</div>
        ))}
      </div>

      {/* === Konten Utama === */}
      <div className="page">
        <div className="card home-card">
          <h1>Selamat Datang di <span className="brand-text">ROOKREAD</span></h1>
          <p>
            Jelajahi dunia penuh kisah, mitologi, dan keajaiban literasi.
            Rookread adalah arsip digital tempat buku hidup dan cerita menunggu untuk ditemukan.
          </p>
          <button className="btn" onClick={() => setPage("books")}>
            ✨ Lihat Koleksi Buku
          </button>
        </div>
      </div>
    </div>
  );
}
