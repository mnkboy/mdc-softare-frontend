import isofetch from 'isomorphic-fetch'

//constantes
const dataInicial = {
    array: [],
    reload: false
}

//Obtener datos de graficas por genero
const GET_GRAFICAS_TOTAL_SECCION = 'GET_GRAFICAS_TOTAL_SECCION';


//reducer 
export default function graficasReducer(state = dataInicial, action) {
    switch (action.type) {
        case GET_GRAFICAS_TOTAL_SECCION:
            return { ...state, array: action.payload }
        default:
            return state
    }
}


//acciones
export const getGraficasTotalSeccionAccion = () => async (dispatch, getState) => {
    //Intentamos accion
    try {

        const query = `
		query findGraficasTotalSeccion{
            findGraficasTotalSeccion{
                votados
                novotados
                total
                id:seccion
            }
        }`;


        isofetch(`${process.env.REACT_APP_URI_GRAPH_QL}`, {
            method: 'POST',
            headers: {
                'Authorization': localStorage.getItem(`${process.env.REACT_APP_TOKEN_NAME}`),
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ query }),
        })
            .then(res => res.json())
            .then((result) => {
                try {
                    return dispatch({
                        type: GET_GRAFICAS_TOTAL_SECCION,
                        payload: result.data.findGraficasTotalSeccion,
                        reload: false,
                    })

                } catch (error) {
                    console.log(error)
                }
            });

    }//Procesamos error si existe
    catch (error) {
        console.log(error)
    }
}

