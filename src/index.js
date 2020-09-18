import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


import store from './store/index'
import {Provider} from 'react-redux'
import './Mock/index.js'
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'


ReactDOM.render(
<Provider store={store}>
<App />
</Provider>
    
,
  document.getElementById('root')
);


