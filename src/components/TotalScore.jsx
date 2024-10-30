import React from 'react'
import { useState } from 'react';
import styled from "styled-components";
const TotalScore = ({score}) => {
  return (
    <Scontainer>
    <div>
        <h1>{score}</h1>
        <p>total score</p>
    </div>
     </Scontainer>
  )
}

export default TotalScore
const Scontainer = styled.div`
    display: flex;
    max-width: 200px;
    min-width: 200px;

    text-align: center;
    h1{
        padding: 0;
        margin: 30px 0 0px 0;
        font-size: 100px;
        min-width:200px;
        min-height:100px;
        height: 30px;
        text-align: center;
        line-height: 100px;
       

    }
    p{
        margin: 5px 0;
        font-size: 25px;
        width:100%;
        align-items: center;
        font-weight: bolder;
        min-height: 60px;
        font-weight: 500px;
        line-height: 20px;
        border-bottom: 2px solid black;
    }


`;
