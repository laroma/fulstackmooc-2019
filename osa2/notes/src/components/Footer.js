import React from 'react';

const Footer = () => {
  const footerStyle = {
    margin: 0,
    padding: 0,
    width: '100%',
    borderTop: '1px solid green',
    background: 'white',
    position: 'fixed',
    bottom: 0,
    color: 'green',
    fontStyle: 'italic',
    fontSize: 16
  };

  return (
    <div style={footerStyle}>
      <br />
      <em>Note app, Department of Computer Science 2019</em>
    </div>
  );
};

export default Footer;
