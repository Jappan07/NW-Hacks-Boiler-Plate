import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import reducer, { initialState } from "./store/reducer";
import { StateProvider } from "./store/StateProvider";

const app = (
    <StateProvider initialState={initialState} reducer={reducer}>
        <App />
    </StateProvider>
)

ReactDOM.render(app, document.getElementById('root'));
reportWebVitals();
