import React, { useEffect, useState } from "react";
import "../index.css"; // pastikan file CSS sudah terhubung

export default function Intro({ onFinish }) {
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    // Tampilkan intro selama 2,3 detik, lalu fade out
    const timer1 = setTimeout(() => setFadeOut(true), 2300);
    const timer2 = setTimeout(() => onFinish(), 3000);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, [onFinish]);

  return (
    <div className={`intro-screen camp-halfblood-intro ${fadeOut ? "fade-out" : ""}`}>
      <div className="intro-content">
        {/* ⚡ Logo Petir */}
        <div className="intro-logo">⚡</div>

        {/* Judul utama */}
        <h1 className="intro-title">Camp Rookread Archives</h1>

        {/* Subjudul */}
        <p className="intro-sub">A Collection of Heroes, Gods, and Stories</p>
      </div>
    </div>
  );
}
