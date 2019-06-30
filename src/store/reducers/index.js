const initialState = {
  searchText: '',
  links: [],
  watched: [],
  image: null,
  loading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case 'CHANGE_INPUT':
      return { ...state, searchText: payload };
    case 'CHANGE_LINKS':
      return {...state, links: payload };
    case 'CHANGE_ERROR':
      return {...state, error: payload };
    case 'CHANGE_WATCHED':
      return {...state, watched: payload };
    case 'CHANGE_IMAGE':
      return {...state, image: payload };
    case 'TOGGLE_LOADER':
      return {...state, loading: payload };
    default:
      return {...state};
  }
};

export default reducer;