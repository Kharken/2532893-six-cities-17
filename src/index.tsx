import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './app/app.tsx';
import {Provider} from 'react-redux';
import {ToastContainer} from 'react-toastify';
import {store} from './store';


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(

  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer/>
      <App />
    </Provider>
  </React.StrictMode>
);
