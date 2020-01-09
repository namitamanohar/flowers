
import flowerComponent from "./flower.js";
import { useFlowers } from "./flowerDataProvider.js";


const contentTarget=document.querySelector(".flowerGarden")
const FlowerComponent = () =>{

const allFlowers=useFlowers()

  const render = () =>{
      contentTarget.innerHTML=allFlowers.map(flower=>{
          return flowerComponent(flower)
      }).join("")

  }

render()
}

export default FlowerComponent