import React from 'react'
import {useState} from 'react'
import {FaSearch} from'react-icons/fa'
import styled from 'styled-components'
import {useNavigate} from "react-router-dom"



function Search() {
  const [input,setInput] =useState("");
  const Navigate = useNavigate();


  const  submitHandler = (e) =>{
    e.preventDefault()
    Navigate('/Searched/'+input)
  }
  return (
    <FormStyle  onSubmit={submitHandler}>
      <FaSearch></FaSearch>
        <input 
        onChange={(e) =>setInput(e.target.value)}
        type="text" />
    </FormStyle>
  )
}
const FormStyle = styled.form`
  margin  :0rem 20rem ;
  position: relative;
 
  input{
    border: none;
    background: linear-gradient(35deg, #494949, #303031);
    font-size: 1.5rem;
    color:white;
    padding: 1rem 3rem;
    border: none;
    outline: none;
    border-radius: 1rem;
    width: 100%;
  }
  svg{
    position: absolute;
    top:50%;
    left: 0%;
    transform: translate(100%,-50%);
    color: whitesmoke;

  }
`;
export default Search