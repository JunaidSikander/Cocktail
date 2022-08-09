import React from 'react';
import App from './App';
import ReactDOM from 'react-dom/client';
import store from "redux/store";
import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";

import './index.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
    </React.StrictMode>
);
