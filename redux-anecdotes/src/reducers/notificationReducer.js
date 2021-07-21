const notificationReducer = (state = '', action) => {
  //   console.log('state now: ', state);
  //   console.log('action', action);
  switch (action.type) {
    case 'SET_NOTIFICATION': {
      return action.message;
    }
    case 'REMOVE_NOTIFICATION': {
      return '';
    }
    default:
      return state;
  }
};

let timer = null;
export const setNotification = (message, sec) => {
  return dispatch => {
    dispatch({
      type: 'SET_NOTIFICATION',
      message,
    });
    if (timer) {
      clearTimeout(timer);
      timer = null;
    }
    timer = setTimeout(() => {
      dispatch(removeNotification());
    }, sec * 1000);
  };
};

//without clearTimeout and global timer variable - notification
//is displayed too short when the previous one has not cleared yet
//need to use clearTimeout to get rid of the previous timer to remove notification
//and set a new timer to remove notification
// export const setNotification = (message, sec) => {
//   return dispatch => {
//     dispatch({
//       type: 'SET_NOTIFICATION',
//       message,
//     });
//     setTimeout(() => {
//       dispatch(removeNotification());
//     }, sec * 1000);
//   };
// };

const removeNotification = () => {
  return {
    type: 'REMOVE_NOTIFICATION',
  };
};

export default notificationReducer;
