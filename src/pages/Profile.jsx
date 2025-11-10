import React from "react";
import "../index.css";

export default function Profile() {
  return (
    <div className="profile-page">
      <div className="profile-card">
        <img
          src="https://siap.undip.ac.id/foto/ktm/2023/21120123140184-9f7885e0-9d7e-4f70-8ca7-37992bf855f0.jpg"
          alt="Foto Profil"
          className="profile-photo"
        />
        <h2>Muhammad Bintang Al Harits</h2>
        <p><strong>NIM:</strong> 21120123140184</p>
        <p><strong>Kelompok:</strong> Kelompok 14</p>
      </div>
    </div>
  );
}
