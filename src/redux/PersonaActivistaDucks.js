import { gql, ApolloClient, InMemoryCache } from '@apollo/client'

//constantes
const dataInicial = {
    array: []
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
    console.log("id: " + persona.id)
    console.log("Nombre: " + persona.nombre)
    console.log("Apellido: " + persona.apellido)
    console.log("Votado: " + persona.votado)

    const client = new ApolloClient({
        uri: 'http://localhost:8080/query',
        cache: new InMemoryCache()
    });

    try {
        client
            .query({
                query: gql`query{
                    findPersonasActivistas(id: "${persona.id}"){
                        ...PersonaActivista
                        subactivistas{
                            ...PersonaActivista
                                subactivistas{
                                    ...PersonaActivista
                            }        
                        }        
                    }
                }
                
                fragment PersonaActivista on PersonaActivista {
                        idpersonaactivista
                        idcasilla
                        seccion
                        idlistanom
                        puesto
                        nombre
                        claveelector
                        idjefe
                        votado        
                    }
                    `
            })
            .then(
                result => dispatch({
                    type: GET_PERSONA_ACTIVISTA_EXITO,
                    payload: result.data.findPersonasActivistas,
                })
            );

    } catch (error) {
        console.log(error)
    }
}

export const actualizarPersonaActivistaVotadaAccion = (persona) => async (dispatch, getState) => {
    console.log("id: " + persona.id)
    console.log("Votado: " + persona.votado)

    const client = new ApolloClient({
        uri: 'http://localhost:8080/query',
        cache: new InMemoryCache()
    });

    try {
        client
            .mutate({
                mutation: gql`mutation {  
                    updatePersonaActivista(input: 
                    {
                        idpersonaactivista: "${persona.id}", votado: ${persona.votado}
                      })
                  }
                    `
            })
            .then(
                result => dispatch({
                    type: UPDATE_PERSONA_ACTIVISTA_VOTADA,
                    payload: result.data,
                })
            );

    } catch (error) {
        console.log(error)
    }
}