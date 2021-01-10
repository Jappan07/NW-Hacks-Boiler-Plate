import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { AuthProvider } from "./store/AuthProvider";

const app = (
    <AuthProvider>
        <App />
    </AuthProvider>
)

ReactDOM.render(app, document.getElementById('root'));
reportWebVitals();
