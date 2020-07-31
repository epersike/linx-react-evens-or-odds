import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './components/App';
import './index.css';

import rootReducer from './reducers';

const store = createStore(rootReducer);
console.log('store', store);

store.subscribe(() => console.log('store.getState()', store.getState()))

ReactDOM.render(
    <Provider store={store} >
        <App />
    </Provider>, 
    document.getElementById('root'));
