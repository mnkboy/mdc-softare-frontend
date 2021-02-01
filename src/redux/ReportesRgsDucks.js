import isofetch from 'isomorphic-fetch'

//constantes
const dataInicial = {
    array: [],
    reload: false
}
//Obtener datos de reportes activista
const GET_REPORTES_RGS = 'GET_REPORTES_RGS';
const UPDATE_REPORTES_RGS = 'UPDATE_REPORTES_RGS';

//reducer 
export default function reportesRgsReducer(state = dataInicial, action) {
    switch (action.type) {
        case GET_REPORTES_RGS:
            return { ...state, array: action.payload }
        case UPDATE_REPORTES_RGS:
            return { ...state, array: action.payload }
        default:
            return state
    }
}

//acciones
export const obtenerReportesRgsAccion = () => async (dispatch, getState) => {
    //Intentamos accion
    try {

        const query = `
        query {
            findReportesRgs(id: ""){
                ...ReportesRgs               
            }
        }
        
        fragment ReportesRgs on ReportesRgs {
            id: idreportesrgs
            seccion
            idlistanom
            puesto
            nombre
            telefono
            claveelector
            observaciones
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
                        type: GET_REPORTES_RGS,
                        payload: result.data.findReportesRgs,
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

export const actualizarReportesRgsVotadaAccion = (setreReload) => async (dispatch, getState) => {
    //Intentamos accion
    try {

    }//Procesamos error si existe
    catch (error) {
        console.log(error)
    }
}