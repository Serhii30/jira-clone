import React from 'react';
import App from './App';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {store} from './store';
import './indexs.scss';

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);