import {applyMiddleware,createStore} from 'redux';
import {createLogger} from 'redux-logger';
import thunk from 'redux-thunk';
import reducer from '../reducers/index';
const logger = createLogger({
    //logger
});
const middleware = applyMiddleware(thunk,logger);
export default createStore(reducer,middleware);