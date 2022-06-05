
import { ADD_TODO ,DELETE_TODO, FILTER_ALL, FILTER_TODO, FILTER_TRUE } from "../ActionsTypes/TodoActionsType";

export const addTodo = (todo) => {
    return {
        type: ADD_TODO,
        payload: todo,
    };
};

export const removeTodo = (id) => {
    return {
        type: DELETE_TODO,
        payload: id,
    };

};
export const filterTodo = () => {
    return {
        type: FILTER_TODO,
        
    };

};
export const filtertrueTodo = () => {
    return {
        type: FILTER_TRUE,
        
    };

};
export const filterallTodo = () => {
    return {
        type: FILTER_ALL,
        
    };

};
