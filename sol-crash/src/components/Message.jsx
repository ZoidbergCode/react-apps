import React from 'react';
import logo from './../images/logo.png';

const Message = ({ message }) => {
  return (
    <div className="chat__message message">
      <div className="message__img">
        <img src={logo} alt="avatar" />
      </div>
      <div className="message__name">{message.name} :</div>
      <div className="message__body">{message.body}</div>
    </div>
  );
};

export default Message;
