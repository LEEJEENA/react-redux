import { useSelector} from "react-redux";
import { useNavigate, useParams } from "react-router-dom"
import styled from "styled-components";

const Todo =() => {
    
    //useParams이용해서 id 가져오기
    const {id} = useParams()
    const todos = useSelector((state)=> state.todos.todos)
    const navigate = useNavigate()
    

    return(
        <TodoDiv1>
        <TodoDiv2>
            <TodoButton onClick={()=> {navigate("/")}}>이전으로</TodoButton>   

             {todos.filter(todo=> todo.id ===Number(id))
             .map((todo)=> (
                <TodoDiv3 key={todo.id}>
                    <div>{'id : '+todo.id}</div> 
                    <h3> {todo.title}</h3>
                    <div>{todo.content}</div>
                </TodoDiv3>))} 
        </TodoDiv2>
        </TodoDiv1>
    )
}

export default Todo;

const TodoDiv1 =styled.div`
    border: 2px solid rgb(238, 238, 238);
    width: 100%;
    height: 100vh;
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: center;
    justify-content: center;
    `

const TodoDiv2 =styled.div`
    width: 600px;
    height: 400px;
    border: 1px solid rgb(238, 238, 238);
   
    -webkit-box-pack: justify;
    justify-content: space-between;

`

const TodoDiv3 = styled.div`
    padding: 0px 24px;
    display: block;
    font-size: 1.5em;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
`

const TodoButton = styled.button`
    border: 1px solid rgb(221, 221, 221);
    height: 40px;
    width: 120px;
    background-color: rgb(255, 255, 255);
    border-radius: 12px;
    cursor: pointer
`