import "./Card.css"
import image1 from "../../assets/image1.png"
import {useNavigate} from "react-router-dom"


const Card = ({recipes}) => {
  const navigate = useNavigate();
  console.log(recipes);
  return (
    <div className="card">
      {recipes.map(({recipe},index)=>{
        const {label,image} = recipe;
        return (
          <div className="cardWrapper" key={index}>
            <h2>{label}</h2>
            <img src={image ? image : image1} alt="food" />
            <button onClick={()=>navigate("detail", {state: recipe, replace:false})}>More Details</button>
          </div>
        )
      })}
    </div>
  )
}

export default Card