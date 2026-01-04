
import { useState } from 'react'
import './App.css'
import './assets/banner.png'
import OurRecipes from './components/OurRecipes/OurRecipes'
import RecipeCard from './components/RecipeCard/RecipeCard'
import Sidebar from './components/Sidebar/Sidebar'
import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'

function App() {
  const [cartFood,setCartFood]=useState([]);
  const [prepareFood,setPrepareFood]=useState([]);

  const [totalTime,setTotalTime]=useState(0);
  const [totalCalories,setTotalCalories]=useState(0);

  const handleAddToCart=(food)=>{
  //console.log(food);
  const exists=cartFood.find(item=>item.recipe_id===food.recipe_id);
  if(exists){
    alert('This food is already added');
    return;
  }
  return setCartFood([...cartFood,food]);
  
  }

const handlePrepareFood=(prepair)=>{
  const deletedRecipe=cartFood.find(item=> item.recipe_id===prepair.recipe_id);
  

  const remaining=cartFood.filter(item=> item.recipe_id!==prepair.recipe_id);
  setCartFood(remaining);
  setPrepareFood([...prepareFood,deletedRecipe]);
}
const calcluteTimeAndCalories=(time,calories)=>{
  setTotalTime(totalTime + time);
  setTotalCalories(totalCalories + calories);
  
}
console.log(totalTime,totalCalories);

  return (
    <>
      
      
      <div className="main-container mx-auto w-11/12">
        <Navbar></Navbar>
        <Banner></Banner>
        {/* Our Recips section */}
        <OurRecipes></OurRecipes>
        {/* Recips Section */}
        <section className='recips-section flex flex-col md:flex-row gap-6'>
          {/* Recipe cards section */}
          <RecipeCard  handleAddToCart={handleAddToCart}></RecipeCard>

          {/* sidebar */}
          <Sidebar totalTime={totalTime} totalCalories={totalCalories} calcluteTimeAndCalories={calcluteTimeAndCalories} handlePrepareFood={handlePrepareFood} prepareFood={prepareFood} cartFood={cartFood}></Sidebar>
        </section>
      </div>
      <Footer></Footer>

      
    </>
  )
}

export default App
