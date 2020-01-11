export const CHANGE_LINKS = 'CHANGE_LINKS';
export const CHANGE_IMAGE = 'CHANGE_IMAGE';
export const CHANGE_ERROR = 'CHANGE_ERROR';

export const setImages = images => dispatch =>
  dispatch({ type: CHANGE_LINKS, payload: images });

export const setCurrentImage = image => dispatch =>
  dispatch({ type: CHANGE_IMAGE, payload: image });

export const setError = value => dispatch =>
  dispatch({ type: CHANGE_ERROR, payload: value });
