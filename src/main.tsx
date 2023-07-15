/*
 * @Version    : v1.00
 * @Author     : itchaox
 * @Date       : 2023-07-15 15:15
 * @LastAuthor : itchaox
 * @LastTime   : 2023-07-16 00:08
 * @desc       :
 */
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';

import '@/style/index.scss';
import 'normalize.css';

import App from '@/App.tsx';

const app = ReactDOM.createRoot(document.getElementById('root')!);

app.render(
  <HashRouter>
    <App />
  </HashRouter>,
);
