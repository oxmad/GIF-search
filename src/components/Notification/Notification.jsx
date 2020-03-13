import React, { useState, useRef } from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';

import { setError } from '../../actions';
import { container, button, text, closing } from './Notification.module.scss';
import useOutsideClick from '../../hooks/useClickOutside';

const Notification = ({ error, setError }) => {
  const [animated, setAnimatedStatus] = useState(false);
  const containerRef = useRef(null);

  const closeNotification = () => {
    setAnimatedStatus(!animated);

    setTimeout(() => setError(null), 500);
  };

  useOutsideClick(containerRef, closeNotification);

  return (
    <div
      className={classNames(container, { [closing]: animated })}
      ref={containerRef}
    >
      <span className={text}>{error}</span>
      <button
        type="button"
        disabled={animated}
        className={button}
        onClick={closeNotification}
      />
    </div>
  );
};

const ConnectedComponent = connect(({ error }) => ({ error }), { setError })(
  Notification,
);

export { ConnectedComponent as Notification };
