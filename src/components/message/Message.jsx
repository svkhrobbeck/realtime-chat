import "./Message.scss";

import { useContext } from "react";
import { Context } from "../../context/Context";
import moment from "moment";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../../firebase/firebase";

const Message = ({ message, user, createdAt, id }) => {
  const { state } = useContext(Context);

  const handleDeleteMessage = async () => {
    await deleteDoc(doc(db, "messages", id));
  };

  return (
    <div className={`message ${state.user.uid === user.uid && "message--own"}`}>
      {state.user.uid === user.uid && (
        <button className="message__delete button" onClick={handleDeleteMessage}>
          <img className="message__delete-img" src="/trash.svg" alt="icon trash" />
        </button>
      )}
      <img className="message__img" src={user.photoURL} alt="user avatar" />
      <div className={`message__inner ${state.user.uid === user.uid && "message__inner--own"}`}>
        {state.user.uid !== user.uid && <span className="message__username">{user.displayName}</span>}
        <p className="message__text">{message}</p>
        <time className={`message__time ${state.user.uid === user.uid && "message__time--own"}`}>{moment(createdAt).format("DD MMMM HH:mm")}</time>
      </div>
    </div>
  );
};

export default Message;
