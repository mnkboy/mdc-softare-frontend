//Bilbiotecas
import axios from 'axios'

//Variables
const dataInicial = {
    array: [],
    reload: false
}

//Constantes acciones
const RETRIEVE_GRAFICAS_PROGRESO_EDAD = 'RETRIEVE_GRAFICAS_PROGRESO_EDAD';

//Reducer
export default function graficasProgresoEdadReducer(state = dataInicial, action) {
    switch (action.type) {
        case RETRIEVE_GRAFICAS_PROGRESO_EDAD:
            return { ...state, array: action.payload, reload: action.reload }
        default:
            return state
    }
}
//Acciones

//retrieve
export const getGraficasProgresoEdadAccion = (model) => async (dispatch, getState) => {
    //Definimos query
    const query = `query findGraficasProgresoEdad{
                        findGraficasProgresoEdad{
                            id
                            edad
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
            type: RETRIEVE_GRAFICAS_PROGRESO_EDAD,
            payload: res.data.data.findGraficasProgresoEdad,
            reload: false,
        })


    }//Procesamos error si existe
    catch (error) {
        console.log(error)
    }
}
