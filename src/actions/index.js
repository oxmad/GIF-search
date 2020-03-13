export const CHANGE_LINKS = 'CHANGE_LINKS';
export const CHANGE_IMAGE = 'CHANGE_IMAGE';
export const CHANGE_ERROR = 'CHANGE_ERROR';
export const SET_REQUEST_VALUE = 'SET_REQUEST_VALUE';

export const setImages = images => dispatch => {
  dispatch({
    type: CHANGE_LINKS,
    payload: images,
  });
};

export const setError = value => dispatch => {
  dispatch({
    type: CHANGE_ERROR,
    payload: value,
  });
};

export const setRequestValue = value => dispatch => {
  dispatch({
    type: SET_REQUEST_VALUE,
    payload: value,
  });
};
