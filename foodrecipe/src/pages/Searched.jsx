import React from 'react'
import{useState,useEffect} from 'react'
import { Link, useParams } from 'react-router-dom';
import styled from 'styled-components';


function Searched() {
    const[searchedRecipes,setsearchedRecipes] = useState([]);
    let parem = useParams();

    const getSearched = async(name)=> {
        const  data = await fetch(`https://api.spoonacular.com/recipes/complexSearch?apiKey=5d06b0dfa5834c308cdccf0f3b6c97fe&query=${name}&number=20`);
          const recipes = await data.json();
          setsearchedRecipes(recipes.results);
      
      };
      useEffect(()=>{
        getSearched(parem.Search)
      },[parem.Search])
  return (
    <Grid>
        {searchedRecipes.map((item)=>{
            return(

                <Card key={item.id}>
                  <Link to={'/recipe/'+item.id}>
                    <img src={item.image} alt="" />
                    <h4>{item.title}</h4>
                    </Link>
                </Card>
            );
        })}
    </Grid>
  )
}


const Grid = styled.div`
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

export default Searched