import React from 'react';

const Notification = props => {
  if (props.notification === null) {
    return null;
  }

  const { message, type } = props.notification;

  return <div className={`notification ${type}`}>{message}</div>;
};

export default Notification;
