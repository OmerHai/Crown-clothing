// General
import React from 'react';
import ReactDOM from 'react-dom';

// Router
import {BrowserRouter} from 'react-router-dom';

// Redux
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';

// Persiset(Storage)
import { PersistGate } from 'redux-persist/integration/react';

// Styles
import './index.css';
import App from './App';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <PersistGate persistor={persistor}>
        <App />
      </PersistGate>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

