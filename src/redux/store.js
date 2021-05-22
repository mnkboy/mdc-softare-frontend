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
import graficasPorRolReducer from './GraficasPorRolDucks';
import graficasEstructuraReducer from './GraficasEstructuraDucks';
import graficasTotalSeccionReducer from './GraficasTotalSeccionDucks';
import graficasProgresoLocalidadReducer from './GraficasProgresoLocalidadDucks';
import graficasProgresoSeccionReducer from './GraficasProgresoSeccionDucks';
import graficasProgresoEdadReducer from './GraficasProgresoEdadDucks';
import graficasTotalLocalidadReducer from './GraficasTotalLocalidadDucks';
import apoyoDePromovidosReducer from './ApoyoDePromovidosDucks';
import graficasGranTotalReducer from './GraficasGranTotalDucks';

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
    graficasPorRol: graficasPorRolReducer,
    graficasEstructura: graficasEstructuraReducer,
    graficasTotalSeccion: graficasTotalSeccionReducer,
    graficasProgresoLocalidad: graficasProgresoLocalidadReducer,
    graficasProgresoSeccion: graficasProgresoSeccionReducer,
    graficasProgresoEdad: graficasProgresoEdadReducer,
    graficasTotalLocalidad: graficasTotalLocalidadReducer,
    apoyoDePromovidos: apoyoDePromovidosReducer,
    graficasGranTotal: graficasGranTotalReducer,
})

const composeEnhacers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default function generateStore() {
    const store = createStore(rootReducer, composeEnhacers(applyMiddleware(thunk)))
    return store;
}
