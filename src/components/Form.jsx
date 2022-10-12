
import React, {useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { createTodo } from "../redux/modules/todos";
import styled from "styled-components";

const Form = () =>{

  //onchange (title과 content)
  const [title, setTitle] = useState("");
  const [content, setContent] =useState("")

  const todos = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();
  

  //클릭시 입력될 값들
  const onCreate = () => {
    dispatch(createTodo({id: todos.length+1, title, content, isdone : true}));
  }

  //input값 비워주기
  const onClick=()=>{
    if(title !==''&& content !==''){
      onCreate();
      setTitle('')
      setContent('')
    }
  }


    return (<FormDiv>               
                <FormLabel>제목</FormLabel>
                <FormInput  type="text" value={title} onChange={e=>{setTitle(e.target.value)}} />
                <FormLabel >내용</FormLabel>
                <FormInput  type="text" value={content} onChange={e=>{setContent(e.target.value)}} />
                <FormButton onClick={onClick} >추가하기</FormButton>                  
            </FormDiv>)
}

export default Form;


const FormLabel = styled.label`
    font-size: 16px;
    font-weight: 700;
`
const FormInput =styled.input`
    border: none;
    border-radius: 12px;
    height: 40px;
    padding: 0 12px;
    width: 240px;
    margin-right: 50px;
`

const FormButton = styled.button`
    background-color: #FF5050	;
    border: none;
    border-radius: 10px;
    color: #fff;
    font-weight: 700;
    height: 40px;
    width: 140px;
`

const FormDiv = styled.div`
    align-items: center;
    display: flex;
    gap: 20px;
    background-color: #FFF0F0		;
    border-radius: 12px;
    justify-content: space-between;
    margin: 0 auto;
    padding: 30px;
`

