import isofetch from 'isomorphic-fetch'

//constantes
const dataInicial = {
    array: [],
    reload: false
}
//Obtener datos de persona activista
const GET_PERSONA_ACTIVISTA_EXITO = 'GET_PERSONA_ACTIVISTA_EXITO';
const UPDATE_PERSONA_ACTIVISTA_VOTADA = 'UPDATE_PERSONA_ACTIVISTA_VOTADA';

//reducer //PersonaActivistaReducer = paReducer
export default function personaActivistaReducer(state = dataInicial, action) {
    switch (action.type) {
        case GET_PERSONA_ACTIVISTA_EXITO:
            return { ...state, array: action.payload }
        case UPDATE_PERSONA_ACTIVISTA_VOTADA:
            return { ...state, array: action.payload }
        default:
            return state
    }
}

//acciones
export const obtenerPersonaActivistaAccion = (persona) => async (dispatch, getState) => {
    //Intentamos accion
    try {

        const query = `
        query{
            findPersonasActivistas(id: ""){
                ...PersonaActivista
                # subactivistas{
                #     ...PersonaActivista
                #         subactivistas{
                #             ...PersonaActivista
                #     }        
                # }        
            }
        }
        
        fragment PersonaActivista on PersonaActivista {
                id:idpersonaactivista
                idcasilla
                seccion
                idlistanom
                puesto
                nombre
                claveelector
                idjefe
                votado        
            }`;


        isofetch(`${process.env.REACT_APP_URI_GRAPH_QL}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query }),
        })
            .then(res => res.json())
            .then(result => dispatch({
                type: GET_PERSONA_ACTIVISTA_EXITO,
                payload: result.data.findPersonasActivistas,
                reaload: false,
            }))            

    }//Procesamos error si existe
    catch (error) {
        console.log(error)
    }
}

export const actualizarPersonaActivistaVotadaAccion = (persona) => async (dispatch, getState) => {    
    //Intentamos accion
    try {

        const query = `
        mutation {  
            updatePersonaActivista(input: 
            {
                idpersonaactivista: "${persona.id}", votado: ${persona.votado}
              })
          }`;          

        const { array } = getState().personasActivistas;       

        isofetch(`${process.env.REACT_APP_URI_GRAPH_QL}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query }),
        })
            .then(res => res.json())
            .then(result => dispatch({
                type: UPDATE_PERSONA_ACTIVISTA_VOTADA,
                payload: array,
                reload:true
            }))


    }//Procesamos error si existe
    catch (error) {
        console.log(error)
    }
}