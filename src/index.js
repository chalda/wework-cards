import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store/configureStore';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
<div style={{height: "100%"}}>
    <Provider store={store} >
        <App />
    </Provider>
</div>
, document.getElementById('root'));

registerServiceWorker();