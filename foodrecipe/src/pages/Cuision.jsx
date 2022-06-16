import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import{motion} from "framer-motion"
import { useParams,Link } from 'react-router-dom'



function Cuision() {
  const [cuision,setCuision] = useState([]);
    let param = useParams();

    const getCuision = async(name)=> {
      const  data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=5d06b0dfa5834c308cdccf0f3b6c97fe&cuisine=${name}&number=20`);
        const recipes = await data.json();
        setCuision(recipes.results);
    
    };
    useEffect(()=>{
        getCuision(param.type)
        
    },[param.type]);
  

    return (
      <Grid
      animate={{opacity:1}}
      initial={{opacity:0}}
      exit={{opacity:0}}
      transition={{duration:0.5}}
      >
        {cuision.map((item)=>{
          return(
            <Card key = {item.id}>
              <Link to={'/recipe/'+item.id}>
              <img src={item.image} alt="" />
              <h4>{item.title}</h4>
            </Link>
            </Card>
          )
        })}
      </Grid>
  )
}



const Grid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(20rem,1fr));
  grid-gap: 3rem;

`;
const Card = styled.div`
  img{
    width: 100%;
  border-radius: 2rem ;
  }
  a{
    text-decoration: none;
  }
  h4{
    text-align: center;
    padding: 1rem;
  }
`


export default Cuision