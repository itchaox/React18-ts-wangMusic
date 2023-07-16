/*
 * @Version    : v1.00
 * @Author     : itchaox
 * @Date       : 2023-07-15 15:15
 * @LastAuthor : itchaox
 * @LastTime   : 2023-07-16 09:37
 * @desc       :
 */
import { useRoutes } from 'react-router-dom';

import routes from './router';

function App() {
  return <>{useRoutes(routes)}</>;
}

export default App;
