//Bilbiotecas
import axios from 'axios'

//Variables
const dataInicial = {
    array: [],
    reload: false
}

//Constantes acciones
const RETRIEVE_GRAFICAS_PROGRESO_SECCION = 'RETRIEVE_GRAFICAS_PROGRESO_SECCION';

//Reducer
export default function graficasProgresoSeccionReducer(state = dataInicial, action) {
    switch (action.type) {
        case RETRIEVE_GRAFICAS_PROGRESO_SECCION:
            return { ...state, array: action.payload, reload: action.reload }
        default:
            return state
    }
}
//Acciones

//retrieve
export const getGraficasProgresoSeccionAccion = (model) => async (dispatch, getState) => {
    //Definimos query
    const query = `query findGraficasProgresoSeccion{
                        findGraficasProgresoSeccion{
                            id
                            seccion
                            total
                        }
                    }`;



    //Intentamos accion
    try {
        const res = await axios.post(`${process.env.REACT_APP_URI_GRAPH_QL}`, {
            query,
        },
            {
                headers: {
                    'Authorization': localStorage.getItem(`${process.env.REACT_APP_TOKEN_NAME}`),
                    'Content-Type': 'application/json',
                }
            })
        dispatch({
            type: RETRIEVE_GRAFICAS_PROGRESO_SECCION,
            payload: res.data.data.findGraficasProgresoSeccion,
            reload: false,
        })


    }//Procesamos error si existe
    catch (error) {
        console.log(error)
    }
}
