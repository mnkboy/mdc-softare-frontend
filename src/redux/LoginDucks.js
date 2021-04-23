import axios from 'axios'

//constantes
const dataInicial = {
    array: [],
    reload: false,
    message: [],
    error: false,
}
//Obtener datos de reportes activista
const GET_LOGIN = 'GET_LOGIN';
const CLEAN_STATES = 'CLEAN_STATES';

//reducer 
export default function loginReducer(state = dataInicial, action) {
    switch (action.type) {
        case GET_LOGIN:
            return {
                ...state,
                array: action.payload,
                message: action.message,
                error: action.error,
                reload: action.reload
            }
        case CLEAN_STATES:
            return {
                ...state,
                array: action.payload,
                message: action.message,
                error: action.error,
                reload: action.reload
            }
        default:
            return state
    }
}

//acciones
export const getLoginAccion = (login, setCerror, setCmessage) => async (dispatch, getState) => {
    //Definimos query
    const query = `
    mutation login{
        login(input: {username: "${login.usuario}", password: "${login.password}"})
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
                    'QueryName': 'login',
                }
            })

        var err = res.data.errors === undefined ? null : JSON.parse(res.data.errors[0].message);
        // setCerror(res.data.errors === undefined ? false : true)
        // setCmessage(err)
        //Establecemos el token
        if (err === null) {
            localStorage.setItem(`${process.env.REACT_APP_TOKEN_NAME}`, res.data.data.login);
            //Recargamos por completo la pagina
            window.location.reload();
        }
        dispatch({
            type: GET_LOGIN,
            payload: err === null ? res.data.data.login : [],
            reload: false,
            message: err === null ? [] : res.data.errors[0].message,
            error: err === null ? false : true,
        })


    }//Procesamos error si existe
    catch (error) {
        console.log(error)
    }
}



export const cleanStates = () => async (dispatch, getState) => {
    //Intentamos accion
    try {
        //Establecemos en el store del redux las variables
        return dispatch({
            type: CLEAN_STATES,
            reaload: false,
            error: false,
        })

    }//Procesamos error si existe
    catch (error) {
        console.log(error)
    }
}