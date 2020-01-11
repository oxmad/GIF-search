import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { setCurrentImage, setError, setImages } from '../../actions';
import { loadData } from '../../api';
import { getRandomNumber } from '../../utils';
import { Form } from './Form';

const FormContainer = ({
  data,
  image,
  error,
  setImages,
  setCurrentImage,
  setError,
}) => {
  const [loadingState, setLoadingState] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    document.title = 'GIF-Search';
  }, []);

  const loadContent = async value => {
    try {
      setLoadingState(true);

      const result = await loadData(value);

      setImages(result);

      setCurrentImage(result[getRandomNumber(0, result.length)].url);

      setLoadingState(false);
    } catch {
      setError('Упс! Проблема с запросом, попробуй другое слово :(');
    }
  };

  const onSubmit = e => {
    e.preventDefault();

    return loadContent(searchValue);
  };

  const formProps = {
    data,
    image,
    error,
    searchValue,
    setSearchValue,
    loadingState,
    onSubmit,
  };

  return <Form {...formProps} />;
};

const ConnectedForm = connect(
  state => ({
    ...state,
  }),
  {
    setImages,
    setCurrentImage,
    setError,
  },
)(FormContainer);

export { ConnectedForm as FormContainer };
