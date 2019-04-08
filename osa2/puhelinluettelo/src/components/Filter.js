import React from 'react';

const Filter = ({ value, handler }) => (
  <div>
    rajaa näytettäviä: <input value={value} onChange={handler} />
  </div>
);

export default Filter;
