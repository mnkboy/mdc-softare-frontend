//Bilbiotecas
import axios from 'axios'

//Variables
const dataInicial = {
    array: [],
    reload: false
}

//Constantes acciones
const RETRIEVE_GRAFICAS_PROGRESO_LOCALIDAD = 'RETRIEVE_GRAFICAS_PROGRESO_LOCALIDAD';

//Reducer
export default function graficasProgresoLocalidadReducer(state = dataInicial, action) {
    switch (action.type) {
        case RETRIEVE_GRAFICAS_PROGRESO_LOCALIDAD:
            return { ...state, array: action.payload, reload: action.reload }
        default:
            return state
    }
}
//Acciones

//retrieve
export const getGraficasProgresoLocalidadAccion = (model) => async (dispatch, getState) => {
    //Definimos query
    const query = `query findGraficasProgresoLocalidad{
                        findGraficasProgresoLocalidad{
                            id
                            localidad
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
            type: RETRIEVE_GRAFICAS_PROGRESO_LOCALIDAD,
            payload: res.data.data.findGraficasProgresoLocalidad,
            reload: false,
        })


    }//Procesamos error si existe
    catch (error) {
        console.log(error)
    }
}
