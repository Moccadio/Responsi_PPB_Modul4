import React, { useState } from "react";
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Books from "./pages/Books";
import Profile from "./pages/Profile";
import Intro from "./components/Intro";

export default function App() {
  const [page, setPage] = useState("home");
  const [showIntro, setShowIntro] = useState(true);

  const renderPage = () => {
    switch (page) {
      case "home": 
        return <Home setPage={setPage} />; // ✅ setPage dikirim ke Home
      case "books": 
        return <Books />;
      case "profile": 
        return <Profile />;
      default: 
        return <Home setPage={setPage} />;
    }
  };

  if (showIntro) {
    return <Intro onFinish={() => setShowIntro(false)} />;
  }

  return (
    <div>
      <Nav current={page} setPage={setPage} />
      <main>{renderPage()}</main>
    </div>
  );
}
