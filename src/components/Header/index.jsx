import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom'
import { NavBar, Icon } from 'zarm';

import s from './style.module.less'

const Header = ({ title = '' }) => {
  const history = useHistory()
  return <div className={s.headerWarp}>
    <div className={s.block}>
      <NavBar
        className={s.header}
        left={<Icon type="arrow-left" theme="primary" onClick={() => history.goBack()} />}
        title={title}
      />
    </div>
  </div>
};

Header.propTypes = {
  title: PropTypes.string, // 标题
};

export default Header;