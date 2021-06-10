import { CHANGEFILTER } from '../actions/index';

const changeFilterReducer = (state = 'All', action) => {
  if (action.type === CHANGEFILTER) {
    if (action.payload.length > 0) {
      return action.payload;
    }
    return 'All';
  }
  return state;
};

export default changeFilterReducer;
