import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Toolbar from "./components/Toolbar";
import ApplicantList from "./pages/ApplicantList/ApplicantList";

function App() {
  return (
    <div
      className="App"
      style={{ display: "flex", flexDirection: "column", height: "100vh" }}
    >
      {/* Top Navbar */}
      <div style={{ flexShrink: 0 }}>
        <Navbar />
      </div>

      {/* Main layout row: Sidebar + Main + Toolbar */}
      <div style={{ display: "flex", flex: 1, minHeight: 0 }}>
        {/* Left Sidebar */}
        <div style={{ width: "60px", flexShrink: 0 }}>
          <Sidebar />
        </div>

        {/* Main Content - scrolls */}
        <main
          style={{
            flex: 1,
            backgroundColor: "#F2F4F8",
            overflowY: "auto",
          }}
        >
          <ApplicantList />
        </main>

        {/* Right Toolbar */}
        <div style={{ width: "60px", flexShrink: 0 }}>
          <Toolbar />
        </div>
      </div>
    </div>
  );
}

export default App;
