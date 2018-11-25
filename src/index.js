import React from 'react';
import ReactDOM from 'react-dom';


import Search from './components/Search/Search';
//import LoginFormPopUp from './components/LoginFormPopUp/LoginFormPopUp';
import RegisterFormPopUp from './components/RegisterFormPopUp/RegisterFormPopUp';

import * as serviceWorker from './serviceWorker';



ReactDOM.render(<RegisterFormPopUp />, document.getElementById('button'))
ReactDOM.render(<Search buttonName="Search" placeholder="Search"  />, document.getElementById('root'));
//ReactDOM.render(<LoginFormPopUp/>,document.getElementById('login'));


serviceWorker.unregister();
