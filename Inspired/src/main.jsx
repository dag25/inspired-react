import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css';
import { App } from './App.jsx';
import './index.scss';

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
);
