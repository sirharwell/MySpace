import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Dudes from './components/Dudes'
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import 'semantic-ui-css/semantic.min.css';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Dudes />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
