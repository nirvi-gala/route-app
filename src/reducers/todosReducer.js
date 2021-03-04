import TODO from "../constants/todosConstants"

const INITIAL_STATE = {
    loading: false,
    todos: [],
    error: false,
    displayTodos: [],
    id: false,
}

const todosReducer = (state = INITIAL_STATE, { type, payload }) => {
    let displayTodos = [...state.displayTodos];
    switch (type) {

        case TODO.LOADING_TODOS:
            return { 
                ...state, 
                loading: true,
            }

        case TODO.TODOS_DATA: {
            let displayTodos = [];
            let lastId = 0;
            if (payload && Array.isArray(payload)){
                displayTodos = payload.slice(0,3);
                lastId = 3
            }
            return{
                ...state,
                loading: false,
                todos: payload,
                displayTodos,
                id: lastId,
            }
        }

        case TODO.ERROR_FETCHING_TODOS: {
            return{
                ...state,
                loading: false,
                error: true,
            }
        }

        case TODO.ADD_TODO:{
            let temp = [...state.todos]
            let newTodo = temp.splice(state.id, 1);
            displayTodos.push(newTodo[0]);
            return{
                ...state,
                id: state.id + 1,
                displayTodos,
            }
        }

        case TODO.DELETE_TODO:{
            let deleteId = payload;
            let filteredTodos = displayTodos.filter((item) => item.id !== deleteId);
            return {
                ...state,
                displayTodos: filteredTodos,
            }
        }

        default:
            return state
    }
}

export default todosReducer;