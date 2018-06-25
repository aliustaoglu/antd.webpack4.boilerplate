import React from 'react';
import ReactDOM from 'react-dom';
import { DatePicker } from 'antd';
import './themes/ant.less';

const title = 'My Minimal React Webpack Babel Ant Setup';

ReactDOM.render(
  <div>
    {title}<br />
    <DatePicker />
  </div>,
  document.getElementById('app')
);

module.hot.accept();
