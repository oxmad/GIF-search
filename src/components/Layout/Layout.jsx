import React from 'react';
import classNames from 'classnames';

import { Notification } from '../Notification/Notification';
import { layout, main, blurred } from './Layout.module.scss';
import { connect } from 'react-redux';
import cx from 'classnames';

const Layout = ({ error, children }) => (
  <div className={cx(layout, 'App')}>
    {error && <Notification />}
    <main className={classNames(main, { [blurred]: error })}>{children}</main>
  </div>
);

const connectedLayout = connect(({ error }) => ({ error }), null)(Layout);

export { connectedLayout as Layout };
