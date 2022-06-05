import {
    ADD_TODO,
    DELETE_TODO,
    FILTER_TODO,
    FILTER_ALL,
    FILTER_TRUE
} from "../ActionsTypes/TodoActionsType";

const initialState = {todo:[
    {
        id:1,
        doneornot:false,
        content:'i have to something for tomorrow'


    },
    {
        id:2,
        doneornot:true,
        content:'ing for tomorrow'


    },
    {
        id:3,
        doneornot:false,
        content:'i have to something for tomorrow'


    }
]};
const filterData = initialState;
const filterData2 = initialState;

//Pure fucntion
// payload is the data that we want to pass to the reducer (we will pass the data from the component to the reducer)
export const TodoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todo: [...state.todo, action.payload],
            };
        case DELETE_TODO:
            return {
                ...state,
                todo: state.todo.filter(
                    (TO) => TO.id !== action.payload
                ),
            };
        case FILTER_TODO:
            return{
                ...filterData,
                todo: filterData.todo.filter((TO)=> TO.doneornot == false)
            }
        case FILTER_TRUE:
            return{
                ...filterData2,
                todo: filterData2.todo.filter((TO)=> TO.doneornot == true)
            }
        case FILTER_ALL:
            return state;
        
            
        default:
            return state;
    }
};
