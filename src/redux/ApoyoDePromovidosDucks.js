//Bilbiotecas
import axios from 'axios'

//Variables
const dataInicial = {
    array: [],
    reload: false
}

//Constantes acciones
const RETRIEVE_APOYO_DE_PROMOVIDOS = 'RETRIEVE_APOYO_DE_PROMOVIDOS';
const UPDATE_APOYO_DE_PROMOVIDOS = 'UPDATE_APOYO_DE_PROMOVIDOS';

//Reducer
export default function apoyoDePromovidosReducer(state = dataInicial, action) {
    switch (action.type) {
        case RETRIEVE_APOYO_DE_PROMOVIDOS:
            return { ...state, array: action.payload, reload: action.reload }
        case UPDATE_APOYO_DE_PROMOVIDOS:
            return { ...state, array: action.payload, reload: action.reload }
        default:
            return state
    }
}
//Acciones

//retrieve
export const retrieveApoyoDePromovidosAccion = (model) => async (dispatch, getState) => {
    //Definimos query
    const query = `
    query findPersonaApoyo{
        findPersonaApoyo(input: {        
                idpersonaapoyo: "${model.id}"
            }){
            ...PersonaApoyo        
        }
    }
    
    fragment PersonaApoyo on PersonaApoyo {
            id:idpersonaapoyo
            idpersonaactivista
            nombre
            apellidopaterno
            apellidomaterno
            ine
            apoyo
            lider
            candidato
            r1
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
            type: RETRIEVE_APOYO_DE_PROMOVIDOS,
            payload: res.data.data.findPersonaApoyo,
            reload: false,
        })


    }//Procesamos error si existe
    catch (error) {
        console.log(error)
    }
}

//UPDATE
export const updateApoyoDePromovidosAccion = (model) => async (dispatch, getState) => {
    //Definimos query
    const query = `
        mutation updatePersonaApoyoMutation{
            updatePersonaApoyoMutation(input: {                
                    idpersonaapoyo: "${model.id}"
                    ine: ${model.ine}
                    apoyo: ${model.apoyo}
                    lider: ${model.lider}
                    candidato: ${model.candidato}
                    r1: ${model.r1}
                }){
                ...PersonaApoyo        
            }
        }
        
        fragment PersonaApoyo on PersonaApoyo {
                idpersonaapoyo
                idpersonaactivista
                nombre
                apellidopaterno
                apellidomaterno
                ine
                apoyo
                lider
                candidato
                r1
            }`;

    const { array } = getState().personasActivistas;

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
            type: UPDATE_APOYO_DE_PROMOVIDOS,
            payload: array,
            reload: true
        })

    }//Procesamos error si existe
    catch (error) {
        console.log(error)
    }
}
