import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import App from './containers/App/App';
import * as serviceWorker from './serviceWorker';
import './styles/tailwind.css';
ReactDOM.render(
    <BrowserRouter>
        <Route path="/:locale(en|ru)?" component={App} />
    </BrowserRouter>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
