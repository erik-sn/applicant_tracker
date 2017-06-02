import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Application from './components/application';

// require all .scss files for deploy if we are not server rendering
// process.env.BROWSER is set in webpack.config.ts in development but deleted
// in the express.js server. This way no .scss files are required while in
// node which will throw an error, but webpack still bundles them.
if (process.env.BROWSER) {
  const requireAll = r => r.keys().forEach(r);
  requireAll(require.context('./sass/', true, /\.scss$/));
}

const App = () => (
  <BrowserRouter>
    <Application />
  </BrowserRouter>
);

export default App;
