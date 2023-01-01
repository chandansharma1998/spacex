import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { configureStore } from '@reduxjs/toolkit';
import allReducers from './Reducers';
import { Provider } from 'react-redux';
import './index.css'

const store = configureStore({
    reducer:allReducers,
    middleware: getDefaultMiddleware => getDefaultMiddleware({
        serializableCheck: false
    })
})
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Provider store={store}>
        <App />
    </Provider>

);



