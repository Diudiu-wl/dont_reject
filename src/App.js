import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="card">
        <h1 className="title">欢迎下载表白小软件</h1>
        <p className="subtitle">拿去发给你的crush吧~</p>

        <a
          href="/downloads/dont_reject.exe"
          download
          className="download-btn"
        >
          下载
        </a>
      </div>
    </div>
  );
}

export default App;
