import React from 'react'

import { useEffect,useState } from 'react';
import styled from "styled-components";
import{Splide,SplideSlide} from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css"
import { Link } from 'react-router-dom';
function Veggie() {
  
  const [Veggie,setVeggie] = useState([]);

  useEffect(() => {
    getVeggie();
  },[]);
 
  const getVeggie = async ()=>{ 
    
    const check = localStorage.getItem("Veggie");
    if(check){
      setVeggie(JSON.parse(check));
    }else{
    
    const api = await fetch(`https://api.spoonacular.com/recipes/random?apiKey=5d06b0dfa5834c308cdccf0f3b6c97fe&number=9&tags=vegetarian`);
    const data = await api.json();
    
    localStorage.setItem("Veggie",JSON.stringify(data.recipes));
    setVeggie(data.recipes);
    console.log(data.recipes);
    }
  };
  
  return (
    <div >
   
     
        <Wrapper >
          <h3>Vegetarian recipes</h3>
          <Splide options={{perPage:3,arrow:false ,pegination:false,drag:"free",gap:"5rem"}}>
          {Veggie.map((recipe)=>{
            return(
              <SplideSlide key={recipe.id}>
              <Card key={recipe.id}>
             <Link to={"/recipe/"+recipe.id}>
                <p>{recipe.title}</p>
                <img src={recipe.image} alt={recipe.title} />
              <Gradient/>
              </Link>
              </Card>
              </SplideSlide>
            );

          })}
          </Splide>
        </Wrapper>
      
  
   </div>
  )
}

const Wrapper = styled.div`
  margin: 4rem 0rem;
`;
const Card = styled.div`
  
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;

  img{
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  p{
    
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0;
    transform: translate(-50%,0%);
    color: whitesmoke;
    width: 100%;
    text-align: center;
    font-weight: 600;
    font-size: 1rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  } 
`;

const Gradient = styled.div`
  width: 100%;
  height: 100%;
  z-index: 3;
  position: absolute;
  background: linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.5));
` ;

export default Veggie