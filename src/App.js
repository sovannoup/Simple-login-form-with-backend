import React, { Component } from "react"
import {
	BrowserRouter as Router,
	Route,
	Switch,
	Redirect,
} from "react-router-dom"
import { APP_REFRESH } from "./modules/app/reducer"

import PageNotFoundComponent from "./screens/PageNotFound"
import Metatages from "./screens/metatages"
import { store } from "./store"
import LoginScreen from './screens/LoginPage/LoginPage'

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {}
	}
	componentDidMount() {
		if (window.performance) {
			if (performance.navigation.type === 1) {
				store.dispatch({ type: APP_REFRESH })
			}
		}
	}
	render() {
		return (
			<div>
				<Router>
					<Route component={Metatages} />
					<Switch>
						<Route exact path="/" render={() => <Redirect to="/login" />} />
						<Route exact path="/login" component={LoginScreen} />
						<Route component={PageNotFoundComponent} />
					</Switch>
				</Router>
			</div>
		)
	}
}

export default App
