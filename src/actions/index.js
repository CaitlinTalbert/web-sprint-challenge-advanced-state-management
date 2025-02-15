import axios from 'axios';


export const LOADING = "LOADING"; 
export const ERROR = "ERROR"; 
export const SUCCESS = "SUCCESS";

export const fetchSmurfs = () => (dispatch) => {
    dispatch(isLoading());
    axios.get(`http://localhost:3333/smurfs`)
        .then((res) => {
            console.log(res); 
            dispatch(success(res.data))
        })
        .catch((err) => {
            console.log({ err }); 
            dispatch(error(err.response.data.error))
        })
};

const isLoading = () => {
    return { type: LOADING };
};

const success = (data) => {
    return { type: SUCCESS, payload: data};
};

const error = (message) => {
    return {type: ERROR, payload: message}
}




//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.