import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'semantic-ui-css/semantic.min.css'
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './contexts/authContext';
import { Provider } from 'react-redux';
import { globalStore } from './store/configureStore';




const root = ReactDOM.createRoot(document.getElementById('root')as HTMLElement,);
root.render(
  <Provider store={globalStore}>
  <AuthProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </AuthProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
