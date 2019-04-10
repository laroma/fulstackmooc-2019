import axios from 'axios';

const baseUrl = 'http://localhost:3001/persons';

const getAll = () => {
  console.log('getAll');
  const request = axios.get(baseUrl);
  return request.then(allPersons => allPersons.data);
};

const create = newObject => {
  console.log('create', newObject);
  const request = axios.post(baseUrl, newObject);
  return request.then(created => created.data);
};

const update = (id, updatedObject) => {
  console.log('update', id, updatedObject);
  const request = axios.put(`${baseUrl}/${id}`, updatedObject);
  return request.then(updated => updated.data);
};

const remove = id => {
  console.log('remove', id);
  const request = axios.delete(`${baseUrl}/${id}`);
  return request.then(response => response);
};

export default { getAll, create, update, remove };
