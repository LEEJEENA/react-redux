import React from "react";
import styled from "styled-components";


const Header =() => {
    return (<HeaderTop>
                <HeaderDiv>My Todo List</HeaderDiv>
                <HeaderDiv>React</HeaderDiv>
            </HeaderTop>)
}

export default Header;

const HeaderTop = styled.div`
    align-items: center;
    border: 1px solid #FFBEBE;
    display: flex;
    height: 50px;
    justify-content: space-between;
    padding: 0 20px;
    border-radius: 12px;
`

const HeaderDiv = styled.div`
    font-size: 15px;
    font-weight: 600;
`