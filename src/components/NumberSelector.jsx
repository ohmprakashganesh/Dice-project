import React, { useState } from 'react'
import styled from "styled-components";
const NumberSelector = ({setError, error,selectNumber, setSelectNumber}) => {

    const arrNumber = [1, 2, 3, 4, 5, 6];
   const numberSelecterHandler=(value)=>{
    setSelectNumber(value);
    setError("");

   };

    return (
        <SelectorContainer>
            <p className='error'>{error}</p>
            {arrNumber.map((value, i) => (
                <Box
                    isSelected={value == selectNumber}
                    key={i} onClick={() => numberSelecterHandler(value)}>{value}
                    </Box>
                    
            ))}
           
        </SelectorContainer>
    );
};
const SelectorContainer = styled.div`
display: flex;
gap: 5px;
margin-top: 50px;
 
.error{
  

    color: red;
    font-size: 20px;
    font-weight: 600;
    position: relative;
    top: -50px;
    left: 55%;
    margin-top: 20px;
}

`;
export default NumberSelector
const Box = styled.div`
 height   :50px ;
 width: 50px;
 border: 1px solid black;
 display: grid;
 cursor: pointer;
 place-items:center;
 background-color: ${(props) => (props.isSelected ? "black" : "white")};
color: ${(props) => (props.isSelected ? "white" : "black")};

 `;
