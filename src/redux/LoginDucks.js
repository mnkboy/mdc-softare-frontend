import isofetch from 'isomorphic-fetch'

//constantes
const dataInicial = {
    array: [],
    reload: false
}
//Obtener datos de reportes activista
const GET_LOGIN = 'GET_LOGIN';
const UPDATE_LOGIN = 'UPDATE_LOGIN';

//reducer 
export default function loginReducer(state = dataInicial, action) {
    switch (action.type) {
        case GET_LOGIN:
            return { ...state, array: action.payload }
        case UPDATE_LOGIN:
            return { ...state, array: action.payload }
        default:
            return state
    }
}

//acciones
export const getLoginAccion = (login) => async (dispatch, getState) => {
    console.log(login)

    //Intentamos accion
    try {
        const query = `
        mutation login{
            login(input: {username: "${login.usuario}", password: "${login.password}"})
          }`;


        isofetch(`${process.env.REACT_APP_URI_GRAPH_QL}`, {
            method: 'POST',
            headers: {
                'Authorization': '',
                'Content-Type': 'application/json',
                'QueryName': 'login',
            },
            body: JSON.stringify({ query }),
        })
            .then(res => res.json())
            .then((result) => {
                try {
                    //Establecemos el token
                    localStorage.setItem(`${process.env.REACT_APP_TOKEN_NAME}`, result.data.login);

                    //Establecemos en el store del redux las variables
                    return dispatch({
                        type: GET_LOGIN,
                        payload: result.data.login,
                        reaload: false,
                    }),
                        //Recargamos por completo la pagina
                        window.location.reload();
                } catch (error) {
                    console.log(error)
                }
            });

    }//Procesamos error si existe
    catch (error) {
        console.log(error)
    }
}

export const updateLoginAccion = (setreReload) => async (dispatch, getState) => {
    //Intentamos accion
    try {

    }//Procesamos error si existe
    catch (error) {
        console.log(error)
    }
}