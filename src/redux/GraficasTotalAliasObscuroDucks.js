//Bilbiotecas
import axios from 'axios'

//Variables
const dataInicial = {
    array: [],
    reload: false
}

//Constantes acciones
const RETRIEVE_GRAFICAS_TOTAL_ALIAS_LADO_OBSCURO = 'RETRIEVE_GRAFICAS_TOTAL_ALIAS_LADO_OBSCURO';

//Reducer
export default function graficasTotalAliasLadoObscuroReducer(state = dataInicial, action) {
    switch (action.type) {
        case RETRIEVE_GRAFICAS_TOTAL_ALIAS_LADO_OBSCURO:
            return { ...state, array: action.payload, reload: action.reload }
        default:
            return state
    }
}
//Acciones

//retrieve
export const getGraficasTotalAliasLadoObscuroAccion = (model) => async (dispatch, getState) => {
    //Definimos query
    const query = `query findGraficasTotalAliasLadoObscuro{
        findGraficasTotalAliasLadoObscuro{
            id
            votados
            novotados
            total
            alias
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
            type: RETRIEVE_GRAFICAS_TOTAL_ALIAS_LADO_OBSCURO,
            payload: res.data.data.findGraficasTotalAliasLadoObscuro,
            reload: false,
        })


    }//Procesamos error si existe
    catch (error) {
        console.log(error)
    }
}
