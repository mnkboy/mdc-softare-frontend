import isofetch from 'isomorphic-fetch'

//constantes
const dataInicial = {
    array: [],
    reload: false
}
//Obtener datos de persona activista
const GET_CASILLA = 'GET_CASILLA';
const UPDATE_CASILLA = 'UPDATE_CASILLA';

//reducer //casillaReducer = paReducer
export default function casillaReducer(state = dataInicial, action) {
    switch (action.type) {
        case GET_CASILLA:
            return { ...state, array: action.payload }
        case UPDATE_CASILLA:
            return { ...state, array: action.payload }
        default:
            return state
    }
}

//acciones
export const obtenerCasillaAccion = () => async (dispatch, getState) => {
    //Intentamos accion
    try {

        const query = `
        query {
            findCasillas(id: ""){
                ...Casilla               
            }
        }
        
        fragment Casilla on Casilla {
                id:idcasilla
                seccionasignada
                padronelectoral
                listanominal
                cargo
                flujo10am
                promovidos10am
                flujo12pm
                promovidos12pm
                flujo2pm
                promovidos2pm
                flujo4pm
                promovidos4pm
                flujo6pm
                promovidos6pm
                nombreinformatico
                telefono 
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
                        type: GET_CASILLA,
                        payload: result.data.findCasillas,
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

export const actualizarCasillaVotadaAccion = (persona, setreReload) => async (dispatch, getState) => {
    //Intentamos accion
    try {

        const query = `
        mutation {  
            updatecasilla(input: 
            {
                idcasilla: "${persona.id}", votado: ${persona.votado}
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
                type: UPDATE_CASILLA,
                payload: array,
                reload: true
            }))
            .then(() => {
                setreReload(true)
            })


    }//Procesamos error si existe
    catch (error) {
        console.log(error)
    }
}