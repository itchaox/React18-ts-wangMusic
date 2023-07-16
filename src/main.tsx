/*
 * @Version    : v1.00
 * @Author     : itchaox
 * @Date       : 2023-07-15 15:15
 * @LastAuthor : itchaox
 * @LastTime   : 2023-07-16 22:09
 * @desc       :
 */
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';

import '@/style/index.scss';
import 'normalize.css';

import App from '@/App.tsx';

import store from './store';

const app = ReactDOM.createRoot(document.getElementById('root')!);

app.render(
  <Provider store={store}>
    <HashRouter>
      <App />
    </HashRouter>
  </Provider>,
);
