import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { setError, setImages, setRequestValue } from '../../actions';
import { loadData } from '../../api';
import { Loader } from '../Loader';
import { Form } from './Form';

const FormContainer = ({
  data,
  error,
  setImages,
  setError,
  requestValue,
  setRequestValue,
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

      setRequestValue(value);

      setLoadingState(false);
    } catch (e) {
      setError('Request fail, sorry :(');
      console.error(e);
    }
  };

  const onSubmit = async e => {
    e.preventDefault();

    if (!searchValue.trim()) {
      setSearchValue('');
      return setError('Field is empty :(');
    }

    if (requestValue.trim() === searchValue.trim()) {
      const newData = [...data];

      newData.shift();

      return setImages(newData);
    }

    await loadContent(searchValue);
  };

  const formProps = {
    data,
    error,
    searchValue,
    setSearchValue,
    loadingState,
    onSubmit,
  };

  if (loadingState) {
    return <Loader />;
  }

  return <Form {...formProps} />;
};

const ConnectedForm = connect(
  state => ({
    ...state,
  }),
  {
    setImages,
    setError,
    setRequestValue,
  },
)(FormContainer);

export { ConnectedForm as FormContainer };
