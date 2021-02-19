import { Avatar, IconButton } from '@material-ui/core';
import { AttachFile, InsertEmoticon, Mic, MoreVert, SearchOutlined } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
// import axios from "../../axios";
import db from '../../firebase';
import firebase from 'firebase';
import { useStateValue } from '../../stateProvider';
import "./chat.css";

function Chat() {

    const [input, setInput] = useState('');
    const [seed, setSeed] = useState('');
    const { roomId } = useParams();
    const [roomName, setRoomName] = useState("");
    const [messages, setMessages] = useState([]);
    const [{ user }, dispatch] = useStateValue();

    useEffect(() => {
        if (roomId) {
            db.collection('rooms')
                .doc(roomId)
                .onSnapshot(snapshot => setRoomName(snapshot.data().name))

            db.collection('rooms')
                .doc(roomId)
                .collection("messages")
                .orderBy('timestamp', 'asc')
                .onSnapshot(snapshot => setMessages(snapshot.docs.map(doc => doc.data())))
        }
    }, [roomId])


    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, [roomId]);
        

    // prevent the default / refresh
    // const sendMessage = async (e) => {
    //     e.preventDefault();

    //     await axios.post('/messages/new', {
    //         message: input,
    //         name: "Demo App",
    //         timestamp: "Just now!",
    //         received: false
    //     });

    //     setInput('');
    // };

    const sendMessage = (e) => {
        e.preventDefault();
        
        db.collection('rooms')
            .doc(roomId)
            .collection('messages')
            .add({
                message: input,
                name: user.displayName,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            });

        setInput("");
    }

    // to get the current user timestamp based on user timezone

    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />

                <div className="chat__headerInfo">
                    <h3>{roomName}</h3>
                    <p>last seen at{" "}
                        {new Date(messages[messages.length - 1]?.timestamp?.toDate()).toUTCString()}
                    </p>
                </div>

                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>
            </div>

            <div className="chat__body">
                {messages.map(message => (
                    <p className={`chat__message ${message.name === user.displayName && "chat__receiver"}`}>
                        <span className="chat__name">{message.name}</span>
                        {message.message}
                        <span className="chat__timestamp">
                            {new Date(message.timestamp?.toDate()).toUTCString()}
                        </span>
                    </p>
                ))}

                {/* <p className="chat__message chat__receiver">
                    <span className="chat__name">Jason</span>
                    This is a message
                    <span className="chat__timestamp">
                        {new Date().toUTCString()}
                    </span>
                </p> */}

            </div>

            <div className="chat__footer">
                <InsertEmoticon />
                <form>
                    <input
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        placeholder="Type a message"
                        type="text"
                    />
                    <button
                        onClick={sendMessage}
                        type="submit"
                    >
                        Send a message
                    </button>
                </form>
                <Mic />
            </div>
        </div>
    )
}

export default Chat;


// e.target.value means the latest entry to be type in