import isofetch from 'isomorphic-fetch'

//constantes
const dataInicial = {
    array: [],
    reload: false
}
//Repository elecciones
const GET_ELECCIONES = 'GET_ELECCIONES';
const CREATE_ELECCIONES = 'CREATE_ELECCIONES';
const UPDATE_ELECCIONES = 'UPDATE_ELECCIONES';
const DELETE_ELECCIONES = 'DELETE_ELECCIONES';

//reducer //eleccionesReducer = paReducer
export default function eleccionesReducer(state = dataInicial, action) {
    switch (action.type) {
        case GET_ELECCIONES:
            return { ...state, array: action.payload, reload: action.reload }
        case CREATE_ELECCIONES:
            return { ...state, array: action.payload, reload: action.reload }
        case UPDATE_ELECCIONES:
            return { ...state, array: action.payload, reload: action.reload }
        case DELETE_ELECCIONES:
            return { ...state, array: action.payload, reload: action.reload }
        default:
            return state
    }
}

//acciones
export const getEleccionesAccion = (elecciones) => async (dispatch, getState) => {
    //Intentamos accion
    try {

        const query = `
		query {
			findTablaElecciones(id: "${elecciones === undefined ? "" : elecciones.id}"){
				...Elecciones               
			}
		}
		
		fragment Elecciones on TablaElecciones {
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

export const createEleccionesAccion = (elecciones) => async (dispatch, getState) => {

    //Intentamos accion
    try {

        const query = `
		mutation create{  
			createTablaEleccionesMutation(input: 
			{                
                seccion:${elecciones.seccion === "" ? null : `"${elecciones.seccion}"`}
                pan: ${elecciones.pan === "" ? null : elecciones.pan}
                pri: ${elecciones.pri === "" ? null : elecciones.pri}
                prd: ${elecciones.prd === "" ? null : elecciones.prd}
                pvem: ${elecciones.pvem === "" ? null : elecciones.pvem}
                pt: ${elecciones.pt === "" ? null : elecciones.pt}
                movciudadano: ${elecciones.movciudadano === "" ? null : elecciones.movciudadano}
                nuevaalianza: ${elecciones.nuevaalianza === "" ? null : elecciones.nuevaalianza}
                morena: ${elecciones.morena === "" ? null : elecciones.morena}
                encuentrosocial: ${elecciones.encuentrosocial === "" ? null : elecciones.encuentrosocial}
                panprd: ${elecciones.panprd === "" ? null : elecciones.panprd}
                pripvemnuevaalianza: ${elecciones.pripvemnuevaalianza === "" ? null : elecciones.pripvemnuevaalianza}
                pripvem: ${elecciones.pripvem === "" ? null : elecciones.pripvem}
                prinuevaalianza: ${elecciones.prinuevaalianza === "" ? null : elecciones.prinuevaalianza}
                pvemnuevaalianza: ${elecciones.pvemnuevaalianza === "" ? null : elecciones.pvemnuevaalianza}
                candidatosnoregistrados: ${elecciones.candidatosnoregistrados === "" ? null : elecciones.candidatosnoregistrados}
                nulos: ${elecciones.nulos === "" ? null : elecciones.nulos}
                total: ${elecciones.total === "" ? null : elecciones.total}
			  }){
                    idtablaelecciones,
					seccion,					
			  }
		  }		`;

        const { array } = getState().elecciones;

        isofetch(`${process.env.REACT_APP_URI_GRAPH_QL}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query }),
        })
            .then(res => res.json())
            .then((result) => {
                try {
                    return dispatch({
                        type: CREATE_ELECCIONES,
                        payload: array,
                        reload: true
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

export const updateEleccionesAccion = (elecciones) => async (dispatch, getState) => {
    //Intentamos accion
    try {

        const query = `mutation {  
			updateTablaEleccionesMutation(input: 
			{				
                idtablaelecciones: "${elecciones.id}",
                seccion:${elecciones.seccion === "" ? null : `"${elecciones.seccion}"`}
                pan: ${elecciones.pan === "" ? null : elecciones.pan}
                pri: ${elecciones.pri === "" ? null : elecciones.pri}
                prd: ${elecciones.prd === "" ? null : elecciones.prd}
                pvem: ${elecciones.pvem === "" ? null : elecciones.pvem}
                pt: ${elecciones.pt === "" ? null : elecciones.pt}
                movciudadano: ${elecciones.movciudadano === "" ? null : elecciones.movciudadano}
                nuevaalianza: ${elecciones.nuevaalianza === "" ? null : elecciones.nuevaalianza}
                morena: ${elecciones.morena === "" ? null : elecciones.morena}
                encuentrosocial: ${elecciones.encuentrosocial === "" ? null : elecciones.encuentrosocial}
                panprd: ${elecciones.panprd === "" ? null : elecciones.panprd}
                pripvemnuevaalianza: ${elecciones.pripvemnuevaalianza === "" ? null : elecciones.pripvemnuevaalianza}
                pripvem: ${elecciones.pripvem === "" ? null : elecciones.pripvem}
                prinuevaalianza: ${elecciones.prinuevaalianza === "" ? null : elecciones.prinuevaalianza}
                pvemnuevaalianza: ${elecciones.pvemnuevaalianza === "" ? null : elecciones.pvemnuevaalianza}
                candidatosnoregistrados: ${elecciones.candidatosnoregistrados === "" ? null : elecciones.candidatosnoregistrados}
                nulos: ${elecciones.nulos === "" ? null : elecciones.nulos}
                total: ${elecciones.total === "" ? null : elecciones.total}
			}) {
				idtablaelecciones,
			}
		  }`;

        const { array } = getState().elecciones;

        isofetch(`${process.env.REACT_APP_URI_GRAPH_QL} `, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query }),
        })
            .then(res => res.json())
            .then((result) => {
                try {
                    return dispatch({
                        type: UPDATE_ELECCIONES,
                        payload: array,
                        reload: true
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

export const deleteEleccionesAccion = (elecciones) => async (dispatch, getState) => {
    //Intentamos accion
    try {
        const query = `
			mutation delete {
				deleteTablaEleccionesMutation(input:
					{
						idtablaelecciones: "${elecciones.id}"
					}) {
                        idtablaelecciones,
						}
			}`;

        const { array } = getState().elecciones;

        isofetch(`${process.env.REACT_APP_URI_GRAPH_QL} `, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ query }),
        })
            .then(res => res.json())
            .then((result) => {
                try {
                    return dispatch({
                        type: DELETE_ELECCIONES,
                        payload: array,
                        reload: true
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