import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div
      className="App"
      style={{ display: "flex", flexDirection: "column", height: "100vh" }}
    >
      {/* Top Navbar */}
      <Navbar />

      {/* Main content with sidebar */}
      <div style={{ display: "flex", flex: 1 }}>
        {/* Sidebar */}
        <Sidebar />

        <main style={{ flex: 1, padding: "1rem", marginLeft: "60px" }}>
          {/* Page content */}
        </main>
      </div>
    </div>
  );
}

export default App;
