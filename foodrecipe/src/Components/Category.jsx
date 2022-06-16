import React from 'react'
import{FaPizzaSlice,FaHamburger} from "react-icons/fa"
import{GiNoodles,GiBubblingBowl} from "react-icons/gi"
import styled from 'styled-components'
import {NavLink} from "react-router-dom";

function Category() {
  return (
    <List>
        <Slink to={'Cuision/Italian'}>
            <FaPizzaSlice/>
            <h4>Italian</h4>
        </Slink>
        <Slink to={'Cuision/American'}>
            <FaHamburger/>
            <h4>American</h4>
        </Slink>
        <Slink to={'Cuision/thai'}>
            <GiNoodles/>
            <h4>Thai</h4>
        </Slink >
        <Slink to={'Cuision/Indian'}>
            <GiBubblingBowl/>
            <h4>Indian</h4>
        </Slink>
    </List>
  )
}
const List = styled.div`
  display  : flex;
  justify-content: center;
  margin: 2rem 0rem;
`;
const Slink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 2rem;
    text-decoration: none;
    background: linear-gradient(35deg, #494949,#313131 );
    width: 6rem;
    height: 6rem;
    cursor: pointer;
    transform: scale(0.8);

    h4{
      color: whitesmoke;
      font-size: 0.8rem;

    }
    svg{
      color: whitesmoke;
      font-size: 2.0rem;
    }
    &.active{
      background: linear-gradient(to right, #f8ae3e,#ce450f);
    }

`;

export default Category




