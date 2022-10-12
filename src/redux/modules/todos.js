// Action value

const CREATE_TODO = "CREATE_TODO"
const DELETE_TODO = "DELETE_TODO"
const GET_TODO = "GET_TODO"

// Action Creator

export const createTodo = (payload) =>{
    return {
        type:CREATE_TODO, 
        payload,}
}

export const deleteTodo = (payload)=> {
    return {
        type :DELETE_TODO,
        payload,
    }
}

export const getTodo= (payload) => {
    return {
        type: GET_TODO,
        payload,
    }
}

// initial State

const initialState ={
    todos: [
        {
            id :1,
            title : "리액트 공부하기",
            content : "리액트 기초를 공부해봅시다",
            isdone : true
           
        },
        {
            id :2,
            title : "점심먹기",
            content : "챕터 1부터 챕터 12까지 학습",
            isdone : false
        },
        {
            id :3,
            title : "리액트 복습하기",
            content : "열심히 해보자!",
            isdone : true
        },
    ]
}

// Reducer

const todos =(state = initialState, action) => {
    switch (action.type){

        //글 내용 추가하기 버튼
        case CREATE_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload],
            }
        // 삭제하기 버튼
        case DELETE_TODO :
            return {
                ...state,
                todos: [...state.todos.filter(todo => 
                    { return todo.id !== action.payload})]
            }
        //완료 => 취소 버튼
        case GET_TODO :
            return {
                
                todos :[...state.todos.map(todo => 
                    (todo.id===action.payload ? 
                        {...todo, isdone : !todo.isdone} : 
                        todo
                ))]
            }

       
            default:
                return state;
    }
}



export default todos