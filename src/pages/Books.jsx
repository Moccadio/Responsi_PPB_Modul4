import React, { useState } from "react";
import "../index.css";

export default function Books() {
  const [selectedBook, setSelectedBook] = useState(null);

  const riordanBooks = [
    {
      title: "The Heroes of Olympus: The Lost Hero",
      genre: "Greek & Roman Quest",
      cover:
        "https://image.gramedia.net/rs:fit:0:0/plain/https://cdn.gramedia.com/uploads/items/9786023857319_The-Lost-Hero---The-Heroes-Of-Olympus-1-Republish.jpg",
      synopsis:
        "Jason terbangun tanpa ingatan di atas bus sekolah. Bersama Piper dan Leo, ia memulai petualangan berbahaya untuk menyelamatkan Hera dan menemukan siapa dirinya sebenarnya.",
      link: "https://www.gramedia.com/products/the-lost-hero",
    },
    {
      title: "The Heroes of Olympus: The Mark of Athena",
      genre: "Greek & Roman Quest",
      cover:
        "https://static.mizanstore.com/d/img/book/cover/nd-384-the_mark_of_athena_-_the_heroes_of_olympus_3_republish-.jpg",
      synopsis:
        "Annabeth memimpin misi menuju Roma dengan Argo II. Tujuh demigod harus bersatu di bawah pertanda sang Athena untuk menghadapi nasib dunia.",
      link: "https://www.gramedia.com/products/the-mark-of-athena",
    },
    {
      title: "The Kane Chronicles: The Red Pyramid",
      genre: "Egyptian Mythology · Fantasy · Adventure",
      cover:
        "https://image.gramedia.net/rs:fit:0:0/plain/https://cdn.gramedia.com/uploads/items/The_Red_Pyramid.jpg",
      synopsis:
        "Carter dan Sadie Kane melepaskan dewa Mesir kuno secara tak sengaja dan harus menghentikan Seth, dewa kekacauan, sebelum dunia hancur.",
      link: "https://www.gramedia.com/products/the-red-pyramid",
    },
    {
      title: "The Kane Chronicles: The Throne of Fire",
      genre: "Egyptian Mythology · Fantasy · Adventure",
      cover:
        "https://p19-images-sign-sg.tokopedia-static.net/tos-alisg-i-aphluv4xwc-sg/img/hDjmkQ/2020/10/23/236a51d5-df70-4b51-aca5-d7ad3e6dc712.jpg~tplv-aphluv4xwc-white-pad-v1:1600:1600.jpeg?lk3s=0ccea506&x-expires=1762678458&x-signature=Op5YeFUGpVPv0c0v9CJov9BQpbQ%3D&x-signature-webp=soT%2BJ%2BOYWEqWz6K1rjAZnMWVX2U%3D",
      synopsis:
        "Carter dan Sadie harus menemukan buku mantra kuno untuk membangkitkan Ra, dewa matahari, sebelum Apophis bangkit dari penjara kekacauan.",
      link: "https://www.gramedia.com/products/the-throne-of-fire",
    },
  ];

  const tereLiyeBooks = [
    {
      title: "Bumi",
      genre: "Fantasi · Petualangan · Dunia Paralel",
      cover:
        "https://image.gramedia.net/rs:fit:0:0/plain/https://cdn.gramedia.com/uploads/items/img20220830_10560995.jpg",
      synopsis:
        "Raib, gadis SMA biasa, menemukan dunia paralel bernama Klan Bulan bersama teman-temannya, Seli dan Ali. Mereka menemukan kekuatan dan rahasia yang mengubah segalanya.",
      link: "https://www.gramedia.com/products/bumi",
    },
    {
      title: "Bulan",
      genre: "Fantasi · Petualangan · Dunia Paralel",
      cover:
        "https://image.gramedia.net/rs:fit:0:0/plain/https://cdn.gramedia.com/uploads/items/img20220905_11324048.jpg",
      synopsis:
        "Petualangan Raib berlanjut ke Klan Matahari, di mana ia menghadapi misteri waktu, ruang, dan masa depan yang penuh kejutan.",
      link: "https://www.gramedia.com/products/bulan",
    },
    {
      title: "Pulang",
      genre: "Drama · Aksi · Kehidupan",
      cover:
        "https://image.gramedia.net/rs:fit:0:0/plain/https://cdn.gramedia.com/uploads/items/pulang_tere_liye.jpeg",
      synopsis:
        "Bujang, anak kampung yang tumbuh keras, menjadi bagian dunia mafia sebelum menemukan makna sesungguhnya tentang keluarga dan pulang.",
      link: "https://www.gramedia.com/products/pulang",
    },
    {
      title: "Rembulan Tenggelam di Wajahmu",
      genre: "Romansa · Fiksi Sains · Kehidupan",
      cover:
        "https://image.gramedia.net/rs:fit:0:0/plain/https://cdn.gramedia.com/uploads/items/REMBULAN_TENGGELAM_DIWAJAHMU.jpg",
      synopsis:
        "Ray, pria misterius di rumah sakit, melihat kembali kehidupannya melalui lima pertanyaan yang belum terjawab — tentang cinta, dosa, dan takdir.",
      link: "https://www.gramedia.com/products/rembulan-tenggelam-di-wajahmu",
    },
  ];

  const renderBooks = (books) =>
    books.map((b, i) => (
      <div
        className="book-card"
        key={i}
        onClick={() => setSelectedBook(b)}
      >
        <img src={b.cover} alt={b.title} className="book-cover" />
        <div className="book-info">
          <div className="book-title">{b.title}</div>
          <div className="book-genre">{b.genre}</div>
        </div>
      </div>
    ));

  return (
    <div className="books-container">
      {/* === Background animasi buku melayang === */}
      <div className="floating-books">
        {Array.from({ length: 10 }).map((_, i) => (
          <div key={i} className={`book-icon book-${i + 1}`}>
            📖
          </div>
        ))}
      </div>

      {/* === Konten utama === */}
      <div className="page">
        <div className="card">
          <h1>Koleksi Rick Riordan Universe ⚡</h1>
          <p>
            Jelajahi dunia mitologi Yunani, Romawi, Mesir, dan Nordik melalui karya epik Rick Riordan!
          </p>
          <div className="book-gallery">{renderBooks(riordanBooks)}</div>
        </div>

        <div className="card" style={{ marginTop: "3rem" }}>
          <h1>Koleksi Dunia Tere Liye 🌿</h1>
          <p>
            Temukan kisah magis dan penuh makna karya Tere Liye, dari dunia paralel hingga cerita kehidupan yang menyentuh hati.
          </p>
          <div className="book-gallery">{renderBooks(tereLiyeBooks)}</div>
        </div>
      </div>

      {/* === Popup Detail Buku === */}
      {selectedBook && (
        <div className="book-popup-overlay" onClick={() => setSelectedBook(null)}>
          <div className="book-popup" onClick={(e) => e.stopPropagation()}>
            <img src={selectedBook.cover} alt={selectedBook.title} className="popup-cover" />
            <h2>{selectedBook.title}</h2>
            <p className="popup-genre">{selectedBook.genre}</p>
            <p className="popup-synopsis">{selectedBook.synopsis}</p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="btn read-btn"
            >
              📖 Baca Buku
            </a>
            <button className="btn close-btn" onClick={() => setSelectedBook(null)}>
              ✖
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
