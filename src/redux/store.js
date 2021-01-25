import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import personaActivistaReducer from './PersonaActivistaDucks';

const rootReducer = combineReducers({
    personasActivistas: personaActivistaReducer,
})

const composeEnhacers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore() {
    const store = createStore(rootReducer, composeEnhacers(applyMiddleware(thunk)))
    return store;
}