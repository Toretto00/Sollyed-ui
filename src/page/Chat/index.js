import React, { useState } from 'react';

import classNames from 'classnames/bind';
import Styles from './ChatBox.module.scss';

const cx = classNames.bind(Styles);

const ChatBox = ({ onSubmit, messages }) => {
    const [message, setMessage] = useState('');

    const handleChange = (event) => {
        setMessage(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(message);
        setMessage('');
    };

    return (
        <div className={cx("chat-box")}>
            <div className={cx("chat-log")}>
                {messages.map((m, index) => (
                    <div key={index} className={cx("chat-message")}>
                        {m}
                    </div>
                ))}
            </div>
            <form onSubmit={handleSubmit} className={cx("chat-input")}>
                <input
                    type="text"
                    value={message}
                    onChange={handleChange}
                    placeholder="Enter your message here"
                />
                <button type="submit">Send</button>
            </form>
        </div>
    );
};

export default ChatBox;
