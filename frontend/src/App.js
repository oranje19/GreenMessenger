import React, { useEffect, useState } from "react";
import './App.css';
import Chat from "./components/chat/chat";
import Sidebar from "./components/sidebar/sidebar";
import Pusher from 'pusher-js';
import axios from "./axios";

function App() {

  const [messages, setMessages] = useState([]);

  // to fetch
  useEffect(() => {
    axios.get('/messages/sync')
      .then(response => {
        setMessages(response.data)
      })
  }, []);

  useEffect(() => {
    const pusher = new Pusher('d34e50dcc3d128876a62', {
      cluster: 'us3'
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage) => {
      // alert(JSON.stringify(newMessage));
      setMessages([...messages, newMessage])
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    }

  }, [messages])

  console.log(messages)

  return (
    <div className="app">
        <div className="app__body">
          <Sidebar />
          <Chat messages={messages} />
        </div>
    </div>
  );
}

export default App;
