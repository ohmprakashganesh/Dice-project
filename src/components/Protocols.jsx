import React from 'react'
import styled from "styled-components";
const Protocols = () => {
  return (
    <Rules>
      <container >
        <h4>Rules are her </h4>
        <p>first select number </p>
        <p>click on dice </p>
        <p>increment</p>
      </container>
    </Rules>
  )
}

export default Protocols;
const Rules = styled.div`

  display: flex;
  align-items: center;
  flex-direction: column;
    
  container{
    margin-top: 10px;
    width: 300px;
    background-color: #ede0e0;
    display: flex;
    flex-direction: column;
    gap: 0px;
    align-items: center;
    p{
      height:30px;
      margin: 0;
      padding: 0;
    }

  }
  
`;
