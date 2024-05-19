import { useContext } from "react";
import moment from "moment";

import { deleteDoc, doc } from "firebase/firestore";
import { Context } from "../../context/Context";
import { db } from "../../firebase/firebase";
import "./Message.scss";

const Message = ({ message, user, createdAt, id }) => {
  const { state } = useContext(Context);

  const handleDeleteMessage = async () => {
    await deleteDoc(doc(db, "messages", id));
  };

  return (
    <div className={`message ${state.user.uid === user.uid && "message--own"}`}>
      {state.user.uid !== user.uid && (
        <img className="message__img" src={user.photoURL} alt="user avatar" />
      )}

      <div className={`message__inner ${state.user.uid === user.uid && "message__inner--own"}`}>
        {state.user.uid !== user.uid && (
          <header className="message__header">
            <span className="message__username">{user.displayName}</span>
          </header>
        )}
        <p className="message__text">{message}</p>
        <footer className="message__footer">
          <time className={`message__time ${state.user.uid === user.uid && "message__time--own"}`}>
            {moment(createdAt).format("DD MMMM HH:mm")}
          </time>
          {state.user.uid === user.uid && (
            <>
              <button className="message__options-btn button">
                <img src="/three-dots.svg" alt="icon three dots" />
                <ul className="options-message">
                  <li className="option-message" onClick={handleDeleteMessage}>
                    <span className="option-message__delete">Delete</span>
                    <img className="option-message__img" src="/trash.svg" alt="icon trash" />
                  </li>
                </ul>
              </button>
            </>
          )}
        </footer>
      </div>
    </div>
  );
};

export default Message;
