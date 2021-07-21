import React from 'react';
import { useDispatch } from 'react-redux';
import { createNewAnecdote } from '../reducers/anecdoteReducer';
import { setNotification } from '../reducers/notificationReducer';

const AnecdoteForm = () => {
  const dispatch = useDispatch();
  const addAnecdote = async e => {
    e.preventDefault();
    const content = e.target.anecdote.value;
    e.target.anecdote.value = '';
    dispatch(createNewAnecdote({ content: content, votes: 0 }));
    dispatch(setNotification(`You created '${content}' anecdote.`, 5));
  };

  return (
    <div>
      <h2>create new anecdote</h2>
      <form onSubmit={addAnecdote}>
        <div>
          <input name="anecdote" />
        </div>
        <button type="submit">create</button>
      </form>
    </div>
  );
};

export default AnecdoteForm;
