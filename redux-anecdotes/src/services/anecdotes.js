import axios from 'axios';

const baseUrl = 'http://localhost:3003/anecdotes';

const getAll = async () => {
  const response = await axios.get(baseUrl);
  return response.data;
};

const createNew = async data => {
  const response = await axios.post(baseUrl, data);
  return response.data;
};

const update = async anecdoteToUpdate => {
  const response = await axios.put(
    `${baseUrl}/${anecdoteToUpdate.id}`,
    anecdoteToUpdate
  );
  return response.data;
};

export default { getAll, createNew, update };
