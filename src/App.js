import React, { Component } from 'react';
import {
  View,
  Text,
} from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {

    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyBovJ_FIt9DeLIVAafQF27_O2rZHX9ve6Q',
            authDomain: 'auth-82de2.firebaseapp.com',
            databaseURL: 'https://auth-82de2.firebaseio.com',
            projectId: 'auth-82de2',
            storageBucket: 'auth-82de2.appspot.com',
            messagingSenderId: '973319729035'
        };
        firebase.initializeApp(config);
    }

	render() {
		return (
			<Provider store={createStore(reducers)}>
				<LoginForm />
			</Provider>
		);
	}
}

export default App;

