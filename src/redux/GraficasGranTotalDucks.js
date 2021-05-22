//Bilbiotecas
import axios from 'axios'

//Variables
const dataInicial = {
    array: [],
    reload: false
}

//Constantes acciones
const RETRIEVE_GRAFICAS_GRAN_TOTAL = 'RETRIEVE_GRAFICAS_GRAN_TOTAL';

//Reducer
export default function graficasTotalLocalidadReducer(state = dataInicial, action) {
    switch (action.type) {
        case RETRIEVE_GRAFICAS_GRAN_TOTAL:
            return { ...state, array: action.payload, reload: action.reload }
        default:
            return state
    }
}
//Acciones

//retrieve
export const getGraficasGranTotalAccion = (model) => async (dispatch, getState) => {
    //Definimos query
    const query = `query findGraficasGranTotal{
                        findGraficasGranTotal{
                            id
                            votados
                            novotados
                            total
                            porcentaje
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
            type: RETRIEVE_GRAFICAS_GRAN_TOTAL,
            payload: res.data.data.findGraficasGranTotal,
            reload: false,
        })


    }//Procesamos error si existe
    catch (error) {
        console.log(error)
    }
}
