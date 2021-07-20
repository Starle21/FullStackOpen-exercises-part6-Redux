import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createNewAnecdote, giveVote } from './reducers/anecdoteReducer';

const App = () => {
  const anecdotes = useSelector(state => state);
  const dispatch = useDispatch();

  const vote = id => {
    console.log('vote', id);
    dispatch(giveVote(id));
  };

  const addAnecdote = e => {
    e.preventDefault();
    const content = e.target.anecdote.value;
    e.target.anecdote.value = '';
    dispatch(createNewAnecdote(content));
  };

  const sortedAnecdotes = anecdotes.slice().sort((a, b) => b.votes - a.votes);

  return (
    <div>
      <h2>Anecdotes</h2>
      {sortedAnecdotes.map(anecdote => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      ))}
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

export default App;
