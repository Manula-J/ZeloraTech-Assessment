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
      <Navbar />

      {/* Main content with sidebar */}
      <div style={{ display: "flex", flex: 1 }}>
        {/* Left Sidebar */}
        <Sidebar />

        <main
          style={{
            flex: 1,
            backgroundColor: "#F2F4F8",
          }}
        >
          {/* Page content */}
          <ApplicantList />
        </main>

        <Toolbar />
      </div>
    </div>
  );
}

export default App;
