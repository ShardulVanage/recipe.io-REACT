import React from 'react';
import{useParams} from 'react-router-dom';
import{useState,useEffect} from 'react';

import styled from 'styled-components';

function Recipe() {
  let param = useParams()
  const [detail,setDetail] =useState({});
  const [activeTab,setActiveTab]=useState("Instructions");

  const fetchDetail = async()=>{
    const data = await fetch(`https://api.spoonacular.com/recipes/${param.name}/information?apiKey=5d06b0dfa5834c308cdccf0f3b6c97fe`);
    const detailData = await data.json();
    setDetail(detailData);
    console.log (detailData)
  }
  useEffect(()=>{
    fetchDetail();
    
  },[param.name])

  return (
    <DetalWrapper>
      <div>
      <h2>{detail.title}</h2>
      <img src={detail.image} alt="" />
    </div>
    <Info>
      <Button
      className={activeTab==="Instructions"?"active":""}
      onClick={()=>setActiveTab("Instructions")}
      > 
       Instructions
      </Button>
      <Button
      className={activeTab==="Ingredients"?"active":""}
      onClick={()=>setActiveTab("Ingredients")}
      > 
       Ingredients
      </Button>
      {activeTab==="Instructions"&&(

      <div>
        <h3 dangerouslySetInnerHTML={{__html: detail.instructions}}></h3>
        <u><h2>Summary</h2></u>
        <h3 dangerouslySetInnerHTML={{__html:detail.summary}}></h3>

      </div>
      )}
      {activeTab==="Ingredients" &&(

      <ul>
        {detail.extendedIngredients.map((ingredient)=>(
          <li key={ingredient.id}>{ingredient.original}</li> 
        ))}
      </ul>
      )}
    </Info>
    </DetalWrapper>
  )
}
const DetalWrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;
  .active{
    background: linear-gradient(35deg, #494949,#313131);
    color: white;
  }
  h2{
    margin-bottom:2rem ;
    font-weight: bold ;
   
  }

  li{
    font-size: 1.2rem;
    line-height: 2.5rem;

  }
  ul{
    margin-top: 2.1rem;
  }
  
`;
const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
  font-weight: 600;
`;
const Info = styled.div`
  margin-left: 10rem;
`;

export default Recipe