import { SET_VISIBILITY } from '../constants';

const initialState = 'SHOW_ALL';

// eslint-disable-next-line default-param-last
const filterReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_VISIBILITY:
      return SET_VISIBILITY;
    default:
      return state;
  }
};

export default filterReducer;
