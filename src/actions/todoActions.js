import TODO from "../constants/todosConstants";
import * as api from "../api";

export const fetchData = () => async(dispatch) => {
    try{
        dispatch({ type: TODO.LOADING_TODOS, payload: true });
        const { data } = await api.fetchData()
        dispatch({ type: TODO.TODOS_DATA, payload: data });
    }catch(err){
        dispatch({ type: TODO.ERROR_FETCHING_TODOS, payload: err });
    }
}

export const addTodo = () => ({
    type: TODO.ADD_TODO
})

export const deleteTodo = (id) => ({
    type: TODO.DELETE_TODO,
    payload: id,
})