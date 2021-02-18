import React, { useEffect } from "react";
import './App.css';
import Chat from "./components/chat/chat";
import Sidebar from "./components/sidebar/sidebar";
import Pusher from 'pusher-js';

function App() {
  useEffect(() => {
    
  })

  useEffect(() => {
    const pusher = new Pusher('d34e50dcc3d128876a62', {
      cluster: 'us3'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (data) => {
      alert(JSON.stringify(data));
    });
  }, [])

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
