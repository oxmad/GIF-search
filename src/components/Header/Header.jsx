import React from 'react';
import { header, title } from './Header.module.scss';

export const Header = () => {
  return (
    <header className={header}>
      <h1 className={title}>Find your GIF!</h1>
    </header>
  );
};
