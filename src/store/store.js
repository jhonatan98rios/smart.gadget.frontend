import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas'
import appReducer from './appReducer'

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    appReducer,
    applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(rootSaga)


export default store