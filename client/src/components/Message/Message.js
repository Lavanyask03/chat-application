import React from 'react';

import './Message.css';

import ReactEmoji from 'react-emoji';

const Message = ({ message: { text, user, time }, name }) => {
  let isSentByCurrentUser = false;

  const trimmedName = name.trim().toLowerCase();

  if(user === trimmedName) {
    isSentByCurrentUser = true;
  }

  return (
    isSentByCurrentUser
      ? (
        <div className="messageContainer justifyEnd">
          <p className="sentText pr-10">{trimmedName}</p>
          <div className="messageBox backgroundPurple">
            <p className="messageText colorWhite">{ReactEmoji.emojify(text)}</p>
          </div>
          <p className="sentTime pl-10 ">{time}</p>
        </div>
        )
        : (
          <div className="messageContainer justifyStart">
            <p className="sentText pr-10 ">{user}</p>
            <div className="messageBox backgroundLight">
              <p className="messageText colorDark">{ReactEmoji.emojify(text)}</p>
            </div>
            <p className="sentTime pl-10 ">{time}</p>
          </div>
        )
  );
}

export default Message;