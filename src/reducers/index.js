import {
  CHANGE_ERROR,
  CHANGE_IMAGE,
  CHANGE_LINKS,
  SET_REQUEST_VALUE,
} from '../actions';

const initialState = {
  data: [],
  image: null,
  error: null,
  requestValue: '',
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CHANGE_LINKS:
      return {
        ...state,
        data: payload,
      };
    case CHANGE_ERROR:
      return {
        ...state,
        error: payload,
      };
    case CHANGE_IMAGE:
      return {
        ...state,
        image: payload,
      };
    case SET_REQUEST_VALUE:
      return {
        ...state,
        requestValue: payload,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
