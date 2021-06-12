import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { EMPTY_FIELD_ERROR } from "@constants/errors";
import {
  currentImageSelector,
  errorSelector,
  searchTextSelector,
} from "@selectors/app.selectors";

import {
  addViewedImageId,
  clearError,
  getImages,
  setError,
  setSearchText,
} from "@slices/app.slice";

import styles from "./Form.module.scss";

export const Form = () => {
  const [searchValue, setSearchValue] = useState("");
  const searchText = useSelector(searchTextSelector);
  const error = useSelector(errorSelector);
  const currentImage = useSelector(currentImageSelector);

  const dispatch = useDispatch();

  const onSubmit = async e => {
    e.preventDefault();

    if (error) {
      dispatch(clearError());
    }

    if (searchValue.trim() === "") {
      return dispatch(setError(EMPTY_FIELD_ERROR));
    }

    if (searchValue.trim().toLowerCase() !== searchText.trim().toLowerCase()) {
      dispatch(getImages(searchValue));
      dispatch(setSearchText(searchValue));
      return;
    }

    if (currentImage) {
      dispatch(addViewedImageId(currentImage.id));
    }
  };

  return (
    <form className={styles.bar} onSubmit={onSubmit}>
      <div className={styles.form}>
        <input
          id="search"
          className={styles.input}
          type="text"
          placeholder="Pizza!"
          onChange={e => setSearchValue(e.target.value)}
          value={searchValue}
        />
        <button className={styles.button} type="submit">
          Search
        </button>
      </div>
      {error && <p className={styles.error}>{error}</p>}
    </form>
  );
};
