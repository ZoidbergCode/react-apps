import React from 'react';
import s from './Title1.module.scss';

const Title1 = ({ children, ...props }) => {
  return (
    <h1 className={s.title} {...props}>
      {children}
    </h1>
  );
};

export default Title1;
