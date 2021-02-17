import React from "react";
import './App.css';
import Chat from "./components/chat/chat";
import Sidebar from "./components/sidebar/sidebar";

function App() {
  return (
    <div className="app">
        <div className="app__body">
          <Sidebar />
          <Chat />
        </div>
    </div>
  );
}

export default App;
