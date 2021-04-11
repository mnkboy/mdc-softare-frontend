//Bilbiotecas
import axios from 'axios'

//Variables
const dataInicial = {
	array: [],
	reload: false
}

//Constantes acciones
const RETRIEVE_PERSONA_ACTIVISTA = 'RETRIEVE_PERSONA_ACTIVISTA';
const CREATE_PERSONA_ACTIVISTA = 'CREATE_PERSONA_ACTIVISTA';
const UPDATE_PERSONA_ACTIVISTA = 'UPDATE_PERSONA_ACTIVISTA';
const DELETE_PERSONA_ACTIVISTA = 'DELETE_PERSONA_ACTIVISTA';
const UPDATE_VOTO = 'UPDATE_VOTO';

//Reducer
export default function modelNameReducer(state = dataInicial, action) {
	switch (action.type) {
		case RETRIEVE_PERSONA_ACTIVISTA:
			return { ...state, array: action.payload, reload: action.reload }
		case CREATE_PERSONA_ACTIVISTA:
			return { ...state, array: action.payload, reload: action.reload }
		case UPDATE_PERSONA_ACTIVISTA:
			return { ...state, array: action.payload, reload: action.reload }
		case DELETE_PERSONA_ACTIVISTA:
			return { ...state, array: action.payload, reload: action.reload }
		case UPDATE_VOTO:
			return { ...state, array: action.payload, reload: action.reload }
		default:
			return state
	}
}
//============= Acciones =============

//RETRIEVE
export const retrievePersonaActivistaAccion = (model) => async (dispatch, getState) => {
	//Definimos query
	const query = `
        query{
            findPersonasActivistas(id: "${model.id}"){
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
                id:idpersonaactivista
                idpuesto
                idrol
                idjefe
                puesto
                nombre
                apellidos
                telefono
                domicilio
                seccion
                ocupacion
                edad
                genero
                claveelector
                localidad
                municipio
                votado
                horavoto
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
			type: RETRIEVE_PERSONA_ACTIVISTA,
			payload: res.data.data.findPersonasActivistas,
			reload: false,
		})


	}//Procesamos error si existe
	catch (error) {
		console.log(error)
	}
}

//UPDATE VOTO
export const updateVotoAccion = (model) => async (dispatch, getState) => {
	//Definimos query
	const query = `
        mutation {  
            updatePersonaActivista(input: 
            {
                idpersonaactivista: "${model.id}", votado: ${model.votado}
              })
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
			type: UPDATE_VOTO,
			payload: array,
			reload: true
		})

	}//Procesamos error si existe
	catch (error) {
		console.log(error)
	}
}

//CREATE
export const createPersonaActivistaAccion = (model) => async (dispatch, getState) => {
	//Definimos query
	const query = `mutation createPersonaActivistaMutation{
		createPersonaActivistaMutation(input: {                
			idpuesto: ${model.idpuesto === "" ? null : `"${model.idpuesto}"`}
			idrol: ${model.idrol === "" ? null : `"${model.idrol}"`}
			puesto: ${model.puesto === "" ? null : `"${model.puesto}"`}
			nombre: ${model.nombre === "" ? null : `"${model.nombre}"`}
			apellidos: ${model.apellidos === "" ? null : `"${model.apellidos}"`}
			telefono: ${model.telefono === "" ? null : `"${model.telefono}"`}
			domicilio: ${model.domicilio === "" ? null : `"${model.domicilio}"`}
			seccion: ${model.seccion === "" ? null : `"${model.seccion}"`}
			ocupacion: ${model.ocupacion === "" ? null : `"${model.ocupacion}"`}
			edad: ${model.edad === undefined ? 18 : model.edad}			
			genero: ${model.genero === "" ? null : `"${model.genero}"`}
			claveelector: ${model.claveelector === "" ? null : `"${model.claveelector}"`}
			localidad: ${model.localidad === "" ? null : `"${model.localidad}"`}
			municipio: ${model.municipio === "" ? "" : `"${model.municipio}"`}
			}){
			...PersonaActivista        
		}
	}
	
	fragment PersonaActivista on PersonaActivista {
			idpersonaactivista
			idpuesto
			idrol
			idjefe
			puesto
			nombre
			apellidos
			telefono
			domicilio
			seccion
			ocupacion
			edad
			genero
			claveelector
			localidad
			municipio
			votado
			horavoto    
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
			type: CREATE_PERSONA_ACTIVISTA,
			payload: array,
			reload: true
		})

	}//Procesamos error si existe
	catch (error) {
		console.log(error)
	}
}

//UPDATE
export const updatePersonaActivistaAccion = (model) => async (dispatch, getState) => {
	//Definimos query
	const query = `mutation updatePersonaActivistaMutation{
		updatePersonaActivistaMutation(input: {                
				idpersonaactivista:"${model.id}"
				idpuesto: ${model.idpuesto === "" ? null : `"${model.idpuesto}"`}
				idrol: ${model.idrol === "" ? null : `"${model.idrol}"`}
				puesto: ${model.puesto === "" ? null : `"${model.puesto}"`}
				nombre: ${model.nombre === "" ? null : `"${model.nombre}"`}
				apellidos: ${model.apellidos === "" ? null : `"${model.apellidos}"`}
				telefono: ${model.telefono === "" ? null : `"${model.telefono}"`}
				domicilio: ${model.domicilio === "" ? null : `"${model.domicilio}"`}
				seccion: ${model.seccion === "" ? null : `"${model.seccion}"`}
				ocupacion: ${model.ocupacion === "" ? null : `"${model.ocupacion}"`}
				edad: ${model.edad === undefined ? 18 : model.edad}			
				genero: ${model.genero === "" ? null : `"${model.genero}"`}
				claveelector: ${model.claveelector === "" ? null : `"${model.claveelector}"`}
				localidad: ${model.localidad === "" ? null : `"${model.localidad}"`}
				municipio: ${model.municipio === "" ? "" : `"${model.municipio}"`}
			}){
			...PersonaActivista        
		}
	}
	
	fragment PersonaActivista on PersonaActivista {
			idpersonaactivista
			idpuesto
			idrol
			idjefe
			puesto
			nombre
			apellidos
			telefono
			domicilio
			seccion
			ocupacion
			edad
			genero
			claveelector
			localidad
			municipio
			votado
			horavoto    
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
			type: UPDATE_PERSONA_ACTIVISTA,
			payload: array,
			reload: true
		})

	}//Procesamos error si existe
	catch (error) {
		console.log(error)
	}
}

//DELETE
export const deletePersonaActivistaAccion = (model) => async (dispatch, getState) => {
	//Definimos query
	const query = `mutation deletePersonaActivistaMutation{
		deletePersonaActivistaMutation(input: {                
			idpersonaactivista:"${model.id}"
			}){
			...PersonaActivista        
		}
	}
	
	fragment PersonaActivista on PersonaActivista {
			idpersonaactivista
			idpuesto
			idrol
			idjefe
			puesto
			nombre
			apellidos
			telefono
			domicilio
			seccion
			ocupacion
			edad
			genero
			claveelector
			localidad
			municipio
			votado
			horavoto    
		}
	
	`;


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
			type: DELETE_PERSONA_ACTIVISTA,
			payload: array,
			reload: true
		})

	}//Procesamos error si existe
	catch (error) {
		console.log(error)
	}
}