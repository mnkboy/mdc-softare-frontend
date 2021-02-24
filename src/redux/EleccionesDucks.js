import isofetch from 'isomorphic-fetch'

//constantes
const dataInicial = {
    array: [],
    reload: false
}
//Obtener datos de elecciones activista
const GET_ELECCIONES = 'GET_ELECCIONES';
const UPDATE_ELECCIONES = 'UPDATE_ELECCIONES';

//reducer 
export default function eleccionesReducer(state = dataInicial, action) {
    switch (action.type) {
        case GET_ELECCIONES:
            return { ...state, array: action.payload }
        case UPDATE_ELECCIONES:
            return { ...state, array: action.payload }
        default:
            return state
    }
}

//acciones
export const obtenerEleccionesAccion = () => async (dispatch, getState) => {
    //Intentamos accion
    try {

        const query = `
        query {
            findTablaElecciones(id: ""){
                ...TablaElecciones               
            }
        }
        
        fragment TablaElecciones on TablaElecciones {
            id:idtablaelecciones
            seccion
            pan
            pri
            prd
            pvem
            pt
            movciudadano
            nuevaalianza
            morena
            encuentrosocial
            panprd
            pripvemnuevaalianza
            pripvem
            prinuevaalianza
            pvemnuevaalianza
            candidatosnoregistrados
            nulos
            total
        }`;


        isofetch(`${process.env.REACT_APP_URI_GRAPH_QL}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query }),
        })
            .then(res => res.json())
            .then((result) => {
                try {
                    return dispatch({
                        type: GET_ELECCIONES,
                        payload: result.data.findTablaElecciones,
                        reaload: false,
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

export const actualizarEleccionesVotadaAccion = (setreReload) => async (dispatch, getState) => {
    //Intentamos accion
    try {

    }//Procesamos error si existe
    catch (error) {
        console.log(error)
    }
}