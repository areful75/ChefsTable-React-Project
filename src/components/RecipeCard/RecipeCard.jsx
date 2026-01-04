import { use, useEffect, useState } from "react";
import { IoIosTime } from "react-icons/io";
import { GiBurningEye } from "react-icons/gi";


const RecipeCard = ({handleAddToCart}) => {

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch('./foods.json')
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, []);
    //console.log(recipes);
    return (
        <div className="md:w-2/3 ">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {
                recipes.map(element=><div key={element.recipe_id} className="card bg-base-100  shadow-sm">
                <figure className="px-8 pt-6">
                  <img className="md:h-52 w-full"
                    src={element.recipe_image}
                    alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{element.recipe_name}</h2>
                  <p className="text-gray-600">{element.short_description}</p>
                 
                  <h3 className="text-lg text-gray-800 font-medium">Ingredients:{element.ingredients.length}</h3>
                  <ul className="ml-8">
                  {
                    element.ingredients.map((item,index)=><li className="list-disc text-gray-600" key={index}>{item}</li>)
                  }
                  </ul>
                  <div className="flex gap-4">
                  <div className="flex items-center gap-2">
                  
                  <IoIosTime size={20} />

                  <p>{element.preparing_time}</p>

                  </div>
                  <div className="flex items-center gap-2">
                  
                  <GiBurningEye size={20} />


                  <p>{element.calories}</p>

                  </div>
                  </div>
                  <div className="card-actions justify-start">
                  <button onClick={
                    ()=>handleAddToCart(element)
                  } className="btn hover:bg-white bg-green-400 rounded-full px-8 text-gray-800 mt-6 font-medium">Want to Cook</button>
                  </div>
                </div>
              </div>)
            }
            </div>
        </div>
    );
};

export default RecipeCard;