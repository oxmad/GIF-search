import styled from 'styled-components';

export const Styled = {
  Bar: styled.div`
    max-width: 320px;
    padding: 0 20px;
    margin: 25px auto 0;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
  `,
  Input: styled.input`
    padding: 0 20px;
    height: 40px;
    flex-grow: 1;
    font-size: 14px;
    outline: none;
    border-radius: 5px 0 0 5px;
    border: 0;
  `,
  Title: styled.h1`
    padding: 0 20px;
  `,
  ResultContainer: styled.div`
    padding: 0 20px;
    max-width: 100%;
  `,
  Image: styled.img`
    width: 100%;
  `,
  Button: styled.button`
    padding: 3px 15px 5px;
    height: 40px;
    font-size: 14px;
    background-color: #113f9b;
    color: #fff;
    outline: none;
    flex-shrink: 0;
    border-radius: 0 5px 5px 0;
    border: 0;
  `,
};
