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

export const setNotification = message => {
  return {
    type: 'SET_NOTIFICATION',
    message,
  };
};

export const removeNotification = () => {
  return {
    type: 'REMOVE_NOTIFICATION',
  };
};

// let timer = null;
// const dispatch = useDispatch();
// export const applyNotification = message => {
//   return dispatch => {
//     dispatch(setNotification(message));
//     if (timer) {
//       clearTimeout(timer);
//       timer = null;
//     }
//     timer = setTimeout(() => {
//       dispatch(removeNotification());
//     }, 5000);
//   };
// };

export default notificationReducer;
