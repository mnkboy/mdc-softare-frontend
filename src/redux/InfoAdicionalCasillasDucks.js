import isofetch from 'isomorphic-fetch'

//constantes
const dataInicial = {
    array: [],
    reload: false
}
//Obtener datos de persona activista
const GET_INFO_ADICIONAL_CASILLA = 'GET_INFO_ADICIONAL_CASILLA';
const UPDATE_INFO_ADICIONAL_CASILLA = 'UPDATE_INFO_ADICIONAL_CASILLA';

//reducer 
export default function infoAdicionalCasillaReducer(state = dataInicial, action) {
    switch (action.type) {
        case GET_INFO_ADICIONAL_CASILLA:
            return { ...state, array: action.payload }
        case UPDATE_INFO_ADICIONAL_CASILLA:
            return { ...state, array: action.payload }
        default:
            return state
    }
}

//acciones
export const obtenerinfoAdicionalCasillaAccion = (persona) => async (dispatch, getState) => {
    //Intentamos accion
    try {

        const query = `
        query {
            findInfoAdicionalCasilla(id: ""){
                ...InfoAdicionalCasilla               
            }
        }
        
        fragment InfoAdicionalCasilla on InfoAdicionalCasilla {
            id:idinfoadicionalcasilla
            idcasilla
            seccionasignada
            horaapertura
            horacierre
            incidenteuno
            horaincidenteuno
            incidentedos
            horaincidentedos
            incidentetres
            horaincidentetres
            incidentecuatro
            horaincidentecuatro
            incidentecinco
            horaincidentecinco
            prip1
            prip2
            pris1
            pris2
            presidente
            sec1
            sec2
            esc1
            esc2
            esc3
            sup1
            sup2
            sup3
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
                        type: GET_INFO_ADICIONAL_CASILLA,
                        payload: result.data.findInfoAdicionalCasilla,
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

export const actualizarinfoAdicionalCasillaVotadaAccion = (persona, setreReload) => async (dispatch, getState) => {
    //Intentamos accion
    try {

        const query = `
        mutation {  
            updateinfoAdicionalinfoAdicionalCasilla(input: 
            {
                idinfoAdicionalinfoAdicionalCasilla: "${persona.id}", votado: ${persona.votado}
              })
          }`;

        const { array } = getState().personasActivistas;

        isofetch(`${process.env.REACT_APP_URI_GRAPH_QL}`, {
            method: 'POST',
            headers: {
                'Authorization': localStorage.getItem(`${process.env.REACT_APP_TOKEN_NAME}`),
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ query }),
        })
            .then(res => res.json())
            .then(result => dispatch({
                type: UPDATE_INFO_ADICIONAL_CASILLA,
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