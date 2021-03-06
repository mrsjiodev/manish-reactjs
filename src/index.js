import React from 'react';
import ReactDOM from 'react-dom';
import 'react-day-picker/lib/style.css';
import 'antd/dist/antd.css';
import './index.scss';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './containers/Home';
import Login from './containers/Login';
import NewAppointment from './containers/NewAppointment';

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Switch>
				<Route path="/login" component={Login} />
				<Route path="/new-appointment" component={NewAppointment} />
				<Route path="/" component={Home} />
			</Switch>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
