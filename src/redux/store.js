import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import personaActivistaReducer from './PersonaActivistaDucks';
import casillaReducer from './CasillasDucks';
import infoAdicionalCasillaReducer from './InfoAdicionalCasillasDucks';

const rootReducer = combineReducers({
    personasActivistas: personaActivistaReducer,
    casillas: casillaReducer,
    infoAdicionalCasillas: infoAdicionalCasillaReducer,
})

const composeEnhacers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore() {
    const store = createStore(rootReducer, composeEnhacers(applyMiddleware(thunk)))
    return store;
}