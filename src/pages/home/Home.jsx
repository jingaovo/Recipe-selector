import axios from "axios";
import { useState } from "react";
import "./Home.css"
import { useEffect } from "react";
import Header from "../../components/header/Header.jsx"
import Card from "../../components/card/Card.jsx"
import img1 from "../../assets/image1.png"

const Home = () => {
  const [query,setQuery] = useState("");
  const [selectedMeal, setSelectedMeal] = useState("");
  const [recipes, setRecipes] = useState(null);

  const APP_ID=process.env.REACT_APP_API_ID
  const APP_KEY=process.env.REACT_APP_API_KEY

  const mealTypes = ['Breakfast','Lunch','Dinner','Snack','TeaTime'];

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${selectedMeal}`;
  //console.log(url);

  const getData=async()=>{
    try{
      const {data} = await axios(url);
      setRecipes(data.hits);
    } catch(error) {
      console.log(error);
    }
  }
  
  return (
    <div>
      <Header query={query} 
      setQuery={setQuery} 
      selectedMeal={selectedMeal}
      setSelectedMeal = {setSelectedMeal}
      mealTypes = {mealTypes}
      getData = {getData}/>
      {!recipes && <img className="myImg" src={img1} alt=""/>}
      {recipes?.length===0 && <h1>Sorry, Try Another Food Name</h1>}
      {
        recipes?.length > 0 && <Card recipes={recipes}/>
      }
     
    </div>
  )
}

export default Home