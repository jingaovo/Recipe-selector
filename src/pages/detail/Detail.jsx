import { useLocation } from "react-router-dom"
import "./Detail.css"

const Detail = () => {
  const {state} = useLocation();
  const {label,image} = state;
  console.log(state)
  return (
    <div className="detailWrapper">
      <div className="imgWrapper">
        <h1>{label}</h1>
        <img src={image} alt="food" />
      </div>
      <div className="bottomWrapper">
        <div className="nutWrapper">
        <h4>NUTRIENTS</h4>
        <p>
          {state.totalNutrients.CA.label}: {" "}
          {Math.round(state.totalNutrients.CA.quantity)}
          {state.totalNutrients.CA.unit}
        </p>
        <p>
          {state.totalNutrients.CHOCDF.label}: {" "}
          {Math.round(state.totalNutrients.CHOCDF.quantity)}
          {state.totalNutrients.CHOCDF.unit}
        </p>
        <p>
          {state.totalNutrients.CHOLE.label}: {" "}
          {Math.round(state.totalNutrients.CHOLE.quantity)}
          {state.totalNutrients.CHOLE.unit}
        </p>
        <p>
          {state.totalNutrients.ENERC_KCAL.label}: {" "}
          {Math.round(state.totalNutrients.ENERC_KCAL.quantity)}
          {state.totalNutrients.ENERC_KCAL.unit}
        </p>
        <p>
          {state.totalNutrients.SUGAR.label}: {" "}
          {Math.round(state.totalNutrients.SUGAR.quantity)}
          {state.totalNutrients.SUGAR.unit}
        </p>
        <p>
          {state.totalNutrients.PROCNT.label}: {" "}
          {Math.round(state.totalNutrients.PROCNT.quantity)}
          {state.totalNutrients.PROCNT.unit}
        </p>
      </div>
      <div className="mealImg">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8uiH_UJt9N9nhLKv42NlJpwWr0vl_cuXXVg&usqp=CAU" alt="foodicon" />
      </div>
      <div className="ingWrapper">
        <h4>INGREDIENT</h4>
        {state.ingredientLines.map((ingredient,index)=>(
          <div>
            <p>
              {index + 1} - {ingredient}
            </p>
          </div>
        ))}
      </div>
      </div>
      
    </div>
  )
}

export default Detail