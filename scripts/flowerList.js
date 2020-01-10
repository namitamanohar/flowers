
import flowerComponent from "./flower.js";
import { useFlowers } from "./flowerDataProvider.js";
import { useColors } from "./colorsDataProvider.js";


const contentTarget=document.querySelector(".flowerGarden")
const FlowerComponent = () =>{

const allFlowers=useFlowers()
const allColors=useColors()

  const render = () =>{
    
      contentTarget.innerHTML=allFlowers.map(flower=>{
        const color=allColors.find(col=>col.id===flower.colorId)
        
        const html=flowerComponent(flower,color)
        return html

      }).join("")
      
  }

render()
}

export default FlowerComponent