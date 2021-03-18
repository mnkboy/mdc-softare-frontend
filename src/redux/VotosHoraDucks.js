import isofetch from 'isomorphic-fetch'

//constantes
const dataInicial = {
	array: [],
	reload: false
}

//Obtener datos de reportes activista
const GET_VOTOS_HORA = 'GET_VOTOS_HORA';

//reducer 
export default function votosHoraReducer(state = dataInicial, action) {
	switch (action.type) {
		case GET_VOTOS_HORA:
			return { ...state, array: action.payload }
		default:
			return state
	}
}

//acciones
export const getVotosHoraAccion = () => async (dispatch, getState) => {
	//Intentamos accion
	try {

		const query = `
		query findVotosHora{
			findVotosHora{
				votos
				hora
			}
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
						type: GET_VOTOS_HORA,
						payload: result.data.findVotosHora,
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
