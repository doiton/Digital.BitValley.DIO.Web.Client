import React from 'react';
import ReactDOM from 'react-dom';


import Search from './components/Search/Search';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Search buttonName="Search" placeholder="Search" />, document.getElementById('root'));



serviceWorker.unregister();
