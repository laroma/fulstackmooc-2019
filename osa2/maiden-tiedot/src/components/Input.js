import React from 'react';

const Input = props => {
  const { label, value, handler } = props;

  return (
    <>
      {label} <input value={value} onChange={handler} />
    </>
  );
};

export default Input;
