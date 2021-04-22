//Bilbiotecas
import axios from 'axios'

//Variables
const dataInicial = {
    array: [],
    reload: false
}

//Constantes acciones
const RETRIEVE_GRAFICAS_TOTAL_LOCALIDAD = 'RETRIEVE_GRAFICAS_TOTAL_LOCALIDAD';

//Reducer
export default function graficasTotalLocalidadReducer(state = dataInicial, action) {
    switch (action.type) {
        case RETRIEVE_GRAFICAS_TOTAL_LOCALIDAD:
            return { ...state, array: action.payload, reload: action.reload }
        default:
            return state
    }
}
//Acciones

//retrieve
export const getGraficasTotalLocalidadAccion = (model) => async (dispatch, getState) => {
    //Definimos query
    const query = `query findGraficasTotalLocalidad{
                        findGraficasTotalLocalidad{
                            id
                            votados
                            novotados
                            total
                            localidad                                                       
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
            type: RETRIEVE_GRAFICAS_TOTAL_LOCALIDAD,
            payload: res.data.data.findGraficasTotalLocalidad,
            reload: false,
        })


    }//Procesamos error si existe
    catch (error) {
        console.log(error)
    }
}
