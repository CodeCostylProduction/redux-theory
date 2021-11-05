import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {applyMiddleware, createStore} from 'redux'
import {Provider} from 'react-redux'
import rootReducer from './redux/rootReducer'



const loggerMiddleware = store => next => action => {
    console.log(store.getState())
    const result = next(action)
    console.log(store.getState(), result)
    return result

}


const store = createStore(rootReducer, applyMiddleware(loggerMiddleware))

const app = (
    <Provider store={store}>
        <App/>
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
