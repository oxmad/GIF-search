import React from 'react';

import styled from './Form.module.scss';

export const Form = ({
  data,
  onSubmit,
  searchValue,
  setSearchValue,
}) => (
  <>
    <h1 className={styled.title}>Find your GIF!</h1>
    {Boolean(data.length) && (
      <div className={styled.resultContainer}>
        <img
          className={styled.image}
          key={data[0].url}
          src={data[0].url}
          alt=""
        />
      </div>
    )}
    <div className={styled.bar}>
      <form className={styled.form} onSubmit={onSubmit}>
        <input
          className={styled.input}
          type="text"
          onChange={e => setSearchValue(e.target.value)}
          value={searchValue}
        />
        <button className={styled.button} type="submit" tabIndex={0}>
          {data.length ? 'Ещё!' : 'Найти!'}
        </button>
      </form>
    </div>
  </>
);
