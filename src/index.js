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
import Layout from './components/artist/Layout'
import LayoutAlbum from './components/album/LayoutAlbum'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware} from 'redux'
import artistApp from './reducers'
import thunk from 'redux-thunk';
import {BrowserRouter as Router, Route} from 'react-router-dom'

//let store = createStore(artistApp,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
// Note: this API requires redux@>=3.1.0
const store = createStore(
    artistApp,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(thunk)
);

const Root = ({store}) => (
    <Provider store={store}>
        <Router>
            <div>
                <Route exact path="/" component={Layout}/>
                <Route path="/eloadok" component={Layout}/>
                <Route path="/albumok" component={LayoutAlbum}/>
            </div>
        </Router>
    </Provider>
);

//render
render(
    <Root store={store}/>,
    document.getElementById('app')
);



