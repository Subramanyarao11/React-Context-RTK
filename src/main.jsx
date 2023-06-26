import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Counter from '../src/pages/Counter';
import ThemeSwitch from '../src/pages/ThemeSwitch.jsx';
import { Provider } from 'react-redux';
import store from './store/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<App />} />
                <Route path="/context" element={<ThemeSwitch />} />
                <Route path="/counter" element={<Counter />} />
                {/* <Route path="/aboutus" element={<AboutUsPage />} /> */}
            </Routes>
        </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
