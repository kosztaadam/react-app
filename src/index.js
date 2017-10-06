/*
 import React from 'react';
 import ReactDOM from 'react-dom';
 import {BrowserRouter, Route} from 'react-router-dom';
 import Layout from './components';

 // App routes
 export default class Router extends React.Component {
 constructor(props) {
 super(props);
 }

 render() {
 return (
 <BrowserRouter>
 <div>
 <Route exact path="/" component={Layout}/>
 <Route exact path="/home" component={Layout}/>
 </div>
 </BrowserRouter>
 )
 }
 }

 ReactDOM.render(<Router />, document.getElementById('app'));*/

import React from "react";
import {render} from "react-dom";
import Layout from './components/Layout'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import artistApp from './reducers'
import thunk from 'redux-thunk';

//let store = createStore(artistApp,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// Note: this API requires redux@>=3.1.0
const store = createStore(
    artistApp,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
);

//render
render(
    <Provider store={store}>
        <Layout />
    </Provider>,
    document.getElementById('app')
);



