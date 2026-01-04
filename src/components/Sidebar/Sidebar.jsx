
const Sidebar = ({cartFood,handlePrepareFood,prepareFood,calcluteTimeAndCalories,totalTime, totalCalories}) => {
    return (
        <div className="md:w-1/3 border-2 rounded-2xl border-gray-300 text-gray-600 bg-base-100 p-2">
          {/* Want to Cook */}
          <div className="overflow-x-auto">
            <h2 className=" pb-2 mx-auto font-semibold text-xl text-gray-800 border-b-2 text-center">Want To Cook:{cartFood.length}</h2>
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Time</th>
        <th>Calories</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        cartFood.map((element,index)=>
        <tr key={index} className="hover:bg-base-300">
        <th>{index+1}</th>
        <td>{element.recipe_name}</td>
        <td>{element.preparing_time}</td>
        <td>{element.calories}</td>
        <td><button onClick={
            ()=>{
                handlePrepareFood(element)
                calcluteTimeAndCalories(element.preparing_time,element.calories)
                
            }
        } className="btn hover:bg-white bg-green-400 rounded-full px-2 py-1 md:px-6 md:py-2 text-gray-800  font-medium">Preparing</button></td>

      </tr>
        )
      }
    
    </tbody>
  </table>
</div>
          {/* Currently cook */}

          <div className="overflow-x-auto">
            <h2 className=" pb-2 mx-auto font-semibold text-xl text-gray-800 border-b-2 text-center">Currently cooking:{prepareFood.length}</h2>
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th></th>
        <th>Name</th>
        <th>Time</th>
        <th>Calories</th>
        
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      {
        prepareFood.map((element,index)=>
        <tr key={index}>
        <th>{index+1}</th>
        <td>{element.recipe_name}</td>
        <td>{element.preparing_time}</td>
        <td>{element.calories}</td>
      </tr>
        )
      }

    <tr>
      <th></th>
        <td></td>
        <td>Total Time={totalTime}</td>
        <td>Total Calories={totalCalories}</td>
      </tr>
      
    
    </tbody>
    
  </table>
</div>
        </div>
    );
};

export default Sidebar;