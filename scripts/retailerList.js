import { useRetailers } from "./retailersDataProvider.js";
import retailerComponent from "./retailer.js";
import { useDistributors } from "./distributorsDataProvider.js";
import { useNurseries } from "./nurseryDataProviders.js";
import { useDistributorNursery } from "./distributorNurseryDataProvider.js";
import { useFlowers } from "./flowerDataProvider.js";
import { useFlowerNursery } from "./flowerNurseryDataProvider.js";
import { useColors } from "./colorsDataProvider.js";


const contentTarget=document.querySelector(".retailers")

const retailerList = () =>{

  const retailers=useRetailers()
  const distributors=useDistributors()
  const distributorNurseries=useDistributorNursery()
  const allNurseries= useNurseries()
  const allFlowers=useFlowers()
  const FlowerNurs=useFlowerNursery()
  const allColors=useColors()

    const render = () =>{
     
      contentTarget.innerHTML=retailers.map(retailer=>{
        const relatedDistributor=distributors.find(dist => dist.id===retailer.distributorId)

          let relatedDN=distributorNurseries.filter(dn=>dn.distributorId===relatedDistributor.id)
          
          let relatedNurseryArray=relatedDN.map(dn=>{
            return allNurseries.find(nurs => nurs.id===dn.nurseryId)
          })
          
        // mapping over matching nursery array which is relatedNurseryArray
          let relatedFN=relatedNurseryArray.map(nurs=>{
           const matchingNurs= FlowerNurs.filter(fn=>fn.nurseryId===nurs.id)
         


            const matchingFlowers=matchingNurs.map(mn=>{
              const NurseryFlower= allFlowers.find(flow=>flow.id===mn.flowerId)
              
             
              return NurseryFlower
            })
            
            
            return matchingFlowers
          })
          console.log(relatedFN)
          // matching Nurs is an array from FlowerNurs 
                  const matchingColors=relatedFN.map(ind=>{
                    const color=ind.map(flo=>{
                      const ColorFlower=allColors.find(col=>col.id===flo.colorId)
  
                      return ColorFlower
                    })
                    return color
                  })
                  console.log("matching colors", matchingColors)
          
           
          
          const html=retailerComponent(retailer, relatedDistributor, relatedNurseryArray, relatedFN,matchingColors )
          return html
        
      }).join("")
    }
    render()

}

export default retailerList