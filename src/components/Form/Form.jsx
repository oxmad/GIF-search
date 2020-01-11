import React from 'react';

import { Loader } from '../Loader';
import { Styled } from './Form.styled';

export const Form = ({
  data,
  image,
  error,
  loadingState,
  onSubmit,
  searchValue,
  setSearchValue,
}) => {
  if (loadingState) {
    return <Loader />;
  }

  const buttonText = Boolean(data.length) ? 'Ещё!' : 'Найти!';

  return (
    <form onSubmit={onSubmit}>
      <Styled.Title>Find you GIF!</Styled.Title>
      {Boolean(data.length) && (
        <Styled.ResultContainer>
          <Styled.Image src={image} alt="" />
        </Styled.ResultContainer>
      )}
      <Styled.Bar>
        <Styled.Input
          type="text"
          onChange={e => setSearchValue(e.target.value)}
          value={searchValue}
        />
        <Styled.Button type="submit">{buttonText}</Styled.Button>
      </Styled.Bar>
      {error && <p className="error">{error}</p>}
    </form>
  );
};
