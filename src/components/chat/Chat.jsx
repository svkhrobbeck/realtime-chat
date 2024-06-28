import { useEffect, useState } from "react";
import { addDoc, collection, getDocs, onSnapshot, query } from "firebase/firestore";

import { useMyContext } from "../../context/Context";

import { Message } from "../";
import { db } from "../../firebase";

import "./Chat.scss";

const Chat = () => {
  const { state } = useMyContext();
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);
  const messagesRef = collection(db, "messages");

  const getMessages = async () => {
    const data = await getDocs(messagesRef);
    const messages = data.docs
      .map(doc => ({ ...doc.data(), id: doc.id }))
      .sort((a, b) => a.order - b.order);
    console.log(messages);
    setMessages(messages);
  };

  useEffect(() => {
    onSnapshot(query(messagesRef), () => {
      getMessages();
      setTimeout(() => {
        window.scrollBy(0, document.body.scrollHeight + 50);
      }, 200);
    });
  }, []);

  const handleCreateMessage = async e => {
    e.preventDefault();

    if (!message) return;
    setMessage("");
    await addDoc(messagesRef, {
      message,
      user: state.user,
      createdAt: Date.now(),
      order: messages.length + 1,
    });
  };

  return (
    <section className="chat">
      <div className="container">
        <div className="chat__inner">
          {!!messages.length && messages.map(message => <Message key={message.id} {...message} />)}
        </div>
      </div>
      <div className="chat__actions">
        <div className="container">
          <form className="chat__form" onSubmit={handleCreateMessage}>
            <textarea
              className="chat__field"
              type="text"
              placeholder="Type your message"
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
            <button className="button chat__button">
              <img className="chat__button-img" src="/plane.svg" alt="icon plane" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Chat;
