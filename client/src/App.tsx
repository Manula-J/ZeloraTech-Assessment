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
      {/* Top Navbar - fixed */}
      <div
        style={{
          height: 64,
          flexShrink: 0,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 10,
        }}
      >
        <Navbar />
      </div>

      {/* Main layout row: Sidebar + Main + Toolbar */}
      <div
        style={{
          display: "flex",
          flex: 1,
          marginTop: 64,
          height: "calc(100vh - 60px)",
        }}
      >
        {/* Left Sidebar - fixed */}
        <div
          style={{
            width: "60px",
            position: "fixed",
            top: 64,
            bottom: 0,
            left: 0,
            zIndex: 10,
          }}
        >
          <Sidebar />
        </div>

        {/* Main Content - scrollable */}
        <main
          style={{
            flex: 1,
            marginLeft: 60,
            marginRight: 60,
          }}
        >
          <ApplicantList />
        </main>

        {/* Right Toolbar - fixed */}
        <div
          style={{
            width: "60px",
            position: "fixed",
            top: 64,
            bottom: 0,
            right: 0,
            zIndex: 10,
          }}
        >
          <Toolbar />
        </div>
      </div>
    </div>
  );
}

export default App;
