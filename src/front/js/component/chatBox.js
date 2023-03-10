import React, { useState } from "react";
import "../../styles/chatBox.css";

export function ChatBox() {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (inputValue.trim() !== "") {
      setMessages([...messages, { text: inputValue, isEditable: false }]);
      setInputValue("");
    }
  };

  const handleEdit = (index) => {
    const newMessages = [...messages];
    newMessages[index].isEditable = true;
    setMessages(newMessages);
  };

  const handleSave = (index, newText) => {
    const newMessages = [...messages];
    newMessages[index].text = newText;
    newMessages[index].isEditable = false;
    setMessages(newMessages);
  };

  const handleCancel = (index) => {
    const newMessages = [...messages];
    newMessages[index].isEditable = false;
    setMessages(newMessages);
  };

  const handleDelete = (index) => {
    const newMessages = [...messages];
    newMessages.splice(index, 1);
    setMessages(newMessages);
  };

  return (
    <div className="chat-box bg-light  rounded-2">
      <ul className="chat-box__messages">
        {messages.map((message, index) => (
          <li key={index} className="chat-box__message">
            {message.isEditable ? (
              <>
                <input
                  type="text"
                  value={message.text}
                  onChange={(event) => {
                    const newMessages = [...messages];
                    newMessages[index].text = event.target.value;
                    setMessages(newMessages);
                  }}
                  className="chat-box__edit-input"
                />
                <div className="chat-box__edit-buttons">
                  <button
                    type="button"
                    onClick={() => handleSave(index, message.text)}
                    className="chat-box__button chat-box__button--save"
                  >
                    Save
                  </button>
                  <button
                    type="button"
                    onClick={() => handleCancel(index)}
                    className="chat-box__button chat-box__button--cancel"
                  >
                    Cancel
                  </button>
                </div>
              </>
            ) : (
              <>
                {message.text}
                <div className="chat-box__buttons">
                  <button
                    type="button"
                    onClick={() => handleEdit(index)}
                    className="chat-box__button chat-box__button--edit"
                  >
                    Edit
                  </button>
                  <button
                    type="button"
                    onClick={() => handleDelete(index)}
                    className="chat-box__button chat-box__button--delete"
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit} className="chat-box__form">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          className="chat-box__input"
          placeholder="Type a message..."
        />
        <button
          type="submit"
          className="chat-box__button chat-box__button--send"
        >
          Send
        </button>
      </form>
    </div>
  );
}
