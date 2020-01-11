import { CHANGE_ERROR, CHANGE_IMAGE, CHANGE_LINKS } from '../actions';

const initialState = {
  data: [],
  image: null,
  error: null,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case CHANGE_LINKS:
      return { ...state, data: payload };
    case CHANGE_ERROR:
      return { ...state, error: payload };
    case CHANGE_IMAGE:
      return { ...state, image: payload };
    default:
      return { ...state };
  }
};

export default reducer;
