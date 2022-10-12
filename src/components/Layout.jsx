import React  from 'react';
import styled from "styled-components";

function Layout({children}){
    return (<LayoutBox>
                {children} 
            </LayoutBox>)
        
}


export default Layout;


const LayoutBox =styled.div`
    margin : auto;
      max-width: 1200px;
      min-width: 800px;
      height: 100%;
`