import isofetch from 'isomorphic-fetch'

//constantes
const dataInicial = {
	array: [],
	reload: false
}
//Repository casilla
const GET_CASILLA = 'GET_CASILLA';
const CREATE_CASILLA = 'CREATE_CASILLA';
const UPDATE_CASILLA = 'UPDATE_CASILLA';
const DELETE_CASILLA = 'DELETE_CASILLA';

//reducer //casillaReducer = paReducer
export default function casillaReducer(state = dataInicial, action) {
	switch (action.type) {
		case GET_CASILLA:
			return { ...state, array: action.payload, reload: action.reload }
		case CREATE_CASILLA:
			return { ...state, array: action.payload, reload: action.reload }
		case UPDATE_CASILLA:
			return { ...state, array: action.payload, reload: action.reload }
		case DELETE_CASILLA:
			return { ...state, array: action.payload, reload: action.reload }
		default:
			return state
	}
}

//acciones
export const getCasillaAccion = (casilla) => async (dispatch, getState) => {
	//Intentamos accion
	try {

		const query = `
		query {
			findCasillas(id: "${casilla === undefined ? "" : casilla.id}"){
				...Casilla               
			}
		}
		
		fragment Casilla on Casilla {
				id:idcasilla
				idrepresentantecasilla
				seccionasignada
				cargo
				apertura
				horaapertura
				flujo1230pm
				promovidos1230pm
				flujo430pm
				promovidos430pm
				flujo6pm
				promovidos6pm
				cierre6pm
				horacierre
				rpp1
				rpp2
				rps1
				incidente
				nombre
				municipio
				localidad
				distrito 
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

export const createCasillaAccion = (casilla) => async (dispatch, getState) => {

	//Intentamos accion
	try {

		const query = `
		mutation create{  
			createCasillaMutation(input: 
			{
				idrepresentantecasilla: ${casilla.idrepresentantecasilla === "" ? null : `"${casilla.idrepresentantecasilla}"`}
				seccionasignada: ${casilla.seccionasignada === "" ? null : `"${casilla.seccionasignada}"`}
				cargo: ${casilla.cargo === "" ? null : `"${casilla.cargo}"`}
				apertura: ${casilla.apertura === "" ? null : `"${casilla.apertura}"`}
				horaapertura: "${casilla.horaapertura === "" ? null : casilla.horaapertura}"
				flujo1230pm: ${casilla.flujo1230pm === "" ? null : `"${casilla.flujo1230pm}"`}
				promovidos1230pm: ${casilla.promovidos1230pm === "" ? null : casilla.promovidos1230pm}
				flujo430pm: ${casilla.flujo430pm === "" ? null : `"${casilla.flujo430pm}"`}
				promovidos430pm: ${casilla.promovidos430pm === "" ? null : casilla.promovidos430pm}
				flujo6pm: ${casilla.flujo6pm === "" ? null : `"${casilla.flujo6pm}"`}
				promovidos6pm: ${casilla.promovidos6pm === "" ? null : casilla.promovidos6pm}
				cierre6pm: ${casilla.cierre6pm === "" ? null : casilla.cierre6pm}
				horacierre: "${casilla.horacierre === "" ? null : casilla.horacierre}"
				rpp1: ${casilla.rpp1 === "" ? null : `"${casilla.rpp1}"`}
				rpp2: ${casilla.rpp2 === "" ? null : `"${casilla.rpp2}"`}
				rps1: ${casilla.rps1 === "" ? null : `"${casilla.rps1}"`}
				incidente: ${casilla.incidente === "" ? null : `"${casilla.incidente}"`}
				nombre: ${casilla.nombre === "" ? null : `"${casilla.nombre}"`}
				municipio: ${casilla.municipio === "" ? null : `"${casilla.municipio}"`}
				localidad: ${casilla.localidad === "" ? null : `"${casilla.localidad}"`}
				distrito: ${casilla.distrito === "" ? null : `"${casilla.distrito}"`}
			  }){
					idrepresentantecasilla,
					seccionasignada,					
			  }
		  }		`;

		const { array } = getState().casillas;

		isofetch(`${process.env.REACT_APP_URI_GRAPH_QL}`, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ query }),
		})
			.then(res => res.json())
			.then((result) => {
				try {
					return dispatch({
						type: CREATE_CASILLA,
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

export const updateCasillaAccion = (casilla) => async (dispatch, getState) => {
	//Intentamos accion
	try {

		const query = `mutation {  
			updateCasillaMutation(input: 
			{
				idcasilla: "${casilla.id}",
				idrepresentantecasilla: ${casilla.idrepresentantecasilla === "" ? null : `"${casilla.idrepresentantecasilla}"`}
				seccionasignada: ${casilla.seccionasignada === "" ? null : `"${casilla.seccionasignada}"`}
				cargo: ${casilla.cargo === "" ? null : `"${casilla.cargo}"`}
				apertura: ${casilla.apertura === "" ? null : `"${casilla.apertura}"`}
				horaapertura: "${casilla.horaapertura === "" ? null : casilla.horaapertura}"
				flujo1230pm: ${casilla.flujo1230pm === "" ? null : `"${casilla.flujo1230pm}"`}
				promovidos1230pm: ${casilla.promovidos1230pm === "" ? null : casilla.promovidos1230pm}
				flujo430pm: ${casilla.flujo430pm === "" ? null : `"${casilla.flujo430pm}"`}
				promovidos430pm: ${casilla.promovidos430pm === "" ? null : casilla.promovidos430pm}
				flujo6pm: ${casilla.flujo6pm === "" ? null : `"${casilla.flujo6pm}"`}
				promovidos6pm: ${casilla.promovidos6pm === "" ? null : casilla.promovidos6pm}
				cierre6pm: ${casilla.cierre6pm === "" ? null : casilla.cierre6pm}
				horacierre: "${casilla.horacierre === "" ? null : casilla.horacierre}"
				rpp1: ${casilla.rpp1 === "" ? null : `"${casilla.rpp1}"`}
				rpp2: ${casilla.rpp2 === "" ? null : `"${casilla.rpp2}"`}
				rps1: ${casilla.rps1 === "" ? null : `"${casilla.rps1}"`}
				incidente: ${casilla.incidente === "" ? null : `"${casilla.incidente}"`}
				nombre: ${casilla.nombre === "" ? null : `"${casilla.nombre}"`}
				municipio: ${casilla.municipio === "" ? null : `"${casilla.municipio}"`}
				localidad: ${casilla.localidad === "" ? null : `"${casilla.localidad}"`}
				distrito: ${casilla.distrito === "" ? null : `"${casilla.distrito}"`}
			}) {
				idcasilla,
			}
		  }`;

		const { array } = getState().casillas;

		isofetch(`${process.env.REACT_APP_URI_GRAPH_QL} `, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ query }),
		})
			.then(res => res.json())
			.then((result) => {
				try {
					return dispatch({
						type: UPDATE_CASILLA,
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

export const deleteCasillaAccion = (casilla) => async (dispatch, getState) => {
	//Intentamos accion
	try {
		const query = `
			mutation delete {
				deleteCasillaMutation(input:
					{
						idcasilla: "${casilla.id}"
					}) {
					idcasilla,
						}
			}`;

		const { array } = getState().casillas;

		isofetch(`${process.env.REACT_APP_URI_GRAPH_QL} `, {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({ query }),
		})
			.then(res => res.json())
			.then((result) => {
				try {
					return dispatch({
						type: DELETE_CASILLA,
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