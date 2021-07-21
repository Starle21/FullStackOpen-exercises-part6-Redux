import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { giveVote } from '../reducers/anecdoteReducer';
import {
  setNotification,
  removeNotification,
} from '../reducers/notificationReducer';

let timer = null;
const AnecdoteList = () => {
  const dispatch = useDispatch();
  // const anecdotes = useSelector(state => state.anecdotes);
  const anecdotes = useSelector(({ anecdotes, filter }) => {
    if (filter === '') return anecdotes;
    return anecdotes.filter(a => a.content.includes(filter));
  });

  const vote = anecdote => {
    // console.log('vote', anecdote.id);
    dispatch(giveVote(anecdote.id));
    dispatch(setNotification(`You voted for '${anecdote.content}'`));
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    timer = setTimeout(() => {
      dispatch(removeNotification());
    }, 5000);
  };

  const sortedAnecdotes = anecdotes.slice().sort((a, b) => b.votes - a.votes);

  return (
    <div>
      {sortedAnecdotes.map(anecdote => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AnecdoteList;
