import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import personaActivistaReducer from './PersonaActivistaDucks';
import casillaReducer from './CasillasDucks';
import infoAdicionalCasillaReducer from './InfoAdicionalCasillasDucks';
import reportesRgsReducer from './ReportesRgsDucks';
import eleccionesReducer from './EleccionesDucks';
import votosHoraReducer from './VotosHoraDucks';
import loginReducer from './LoginDucks';
import graficasGeneroReducer from './GraficasGeneroDucks';
import graficasEdadReducer from './GraficasEdadDucks';
import graficasSeccionReducer from './GraficasSeccionDucks';

const rootReducer = combineReducers({
    personasActivistas: personaActivistaReducer,
    casillas: casillaReducer,
    infoAdicionalCasillas: infoAdicionalCasillaReducer,
    reportesRgs: reportesRgsReducer,
    elecciones: eleccionesReducer,
    votosHora: votosHoraReducer,
    login: loginReducer,
    graficasGenero: graficasGeneroReducer,
    graficasEdad: graficasEdadReducer,
    graficasSeccion: graficasSeccionReducer,
})

const composeEnhacers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore() {
    const store = createStore(rootReducer, composeEnhacers(applyMiddleware(thunk)))
    return store;
}