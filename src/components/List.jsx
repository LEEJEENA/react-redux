import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { deleteTodo, getTodo } from "../redux/modules/todos";
import styled from "styled-components";
import {useNavigate } from "react-router-dom"

function List(){
    
    const {todos} = useSelector((state) => state.todos)
    const dispatch = useDispatch()

    //삭제버튼
    const onClickDelete = (payload) => {
        dispatch(deleteTodo(payload))
    }

    // 취소&완료 버튼
    const onClickOther = (payload) => {
        dispatch(getTodo(payload))
    }

    //navigate
    const navigate = useNavigate()

    return(
        <div>
            <h2>Working...🔥</h2>
                <div>
                {todos.filter(todo => todo.isdone)
                .map((todo) => (
                    <ListBox key={todo.id}>
                        <div onClick={()=> {navigate("/todo/"+todo.id)}}>상세보기</div>
                       
                        <ListText>
                            <h3>{todo.title}</h3>
                            <div>{todo.content}</div>
                        </ListText>
                        <ListButton>
                            <ListDelete onClick={()=>onClickDelete(todo.id)}>삭제하기</ListDelete>
                            {todo.isdone===true? 
                            <ListComplete onClick={() =>onClickOther(todo.id)}>완료</ListComplete> : 
                            <ListComplete onClick={() =>onClickOther(todo.id)}>취소</ListComplete>}
                        </ListButton>
                    </ListBox>
                ))}
                

                </div>
            <h2>Done..!🎉</h2>
                <div>
                {todos.filter(todo => !todo.isdone)
                .map((todo) => (
                    <ListBox key={todo.id}>
                        <div onClick={()=> {navigate("/todo/"+todo.id)}}>상세보기</div>
                    <ListText>
                        <h3>{todo.title}</h3>
                        <div>{todo.content}</div>
                    </ListText>
                    <ListButton>
                        <ListDelete onClick={()=>onClickDelete(todo.id)}>삭제하기</ListDelete>
                        {todo.isdone===true? 
                            <ListComplete onClick={() =>onClickOther(todo.id)}>완료</ListComplete> : 
                            <ListComplete onClick={() =>onClickOther(todo.id)}>취소</ListComplete>}
                    </ListButton>
                </ListBox>
                ))}
                </div>
        </div>
    )
}
export default List;


const ListBox =styled.div`
    border: 4px solid #FF5050;
    border-radius: 12px;
    padding: 12px 24px 24px;
    width: 270px;
    margin-bottom: 15px;
    background-color: #FFF0F0;
`
const ListDelete = styled.button`
   background-color:#F4AAAA;
    border: 2px solid red;
    border-radius: 0.5em;
    padding: 15px;
    padding-left: 30px;
    padding-right: 30px;

`
const ListButton = styled.div`
    display: flex;
    gap: 10px;
    margin-top: 24px;
    margin-left: 27px;
`

const ListComplete = styled.button`
    background-color: 	#7DF4B2;
    border: 2px solid green;
    border-radius: 0.5em;
    padding: 15px;
    padding-left: 25px;
    padding-right: 25px;
`
const ListText = styled.div`
    text-align: center;
    margin-top: 20px;
`