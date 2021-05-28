import React, { useState } from 'react';
import PropTypes from 'prop-types'
import { TabBar } from 'zarm';
import { useHistory } from 'react-router-dom';
import CustomIcon from '../CustomIcon';
import s from './style.module.less';

const NavBar = ({ showNav }) => {
  const [activeKey, setActiveKey] = useState('/');
  const history = useHistory()

  const chnageTab = (path) => {
    setActiveKey(path)
    history.push(path)
  }

  return (
    <TabBar visible={showNav} className={s.tab} activeKey={activeKey} onChange={chnageTab}>
        <TabBar.Item
          itemKey="/"
          title="账单"
          icon={<CustomIcon type="zhangdan" />}
        />
        <TabBar.Item
          itemKey="/data"
          title="统计"
          icon={<CustomIcon type="tongji" />}
        />
        <TabBar.Item
          itemKey="/user"
          title="我的"
          icon={<CustomIcon type="wode" />}
        />
      </TabBar>
  );
};

NavBar.propTypes = {
  showNav: PropTypes.bool
}

export default NavBar;