import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { Profiler } from 'react'
import store from './redux/store'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
	<Profiler store={store}>
		<App />
	</Profiler>
)
