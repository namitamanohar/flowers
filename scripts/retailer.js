const retailerComponent = (retailer, distributor,nurseryArray, fnArray, matchingColors) =>{
  return `
    <section class="retailerCard">
    <h2 class="retailerName">Retailer: ${retailer.name}</h2>
    <p class="retailerCity">${retailer.city}</p>
    <p class="retailerState">${retailer.state}</p>
    <p class="retailerAddress">${retailer.address}</p>
    <p class="distributorName">Distributor: ${distributor.name}</p>
    <p class="distributorCity">${distributor.city}</p>
    <p class="distributorState">${distributor.state}</p>
    <p class="distributorAddress">${distributor.address}</p>
    <p>Nurseries:${nurseryArray.map(nurs=>`<li>${nurs.name} </li>`).join("")}</p>


    <ul>Flowers:${fnArray.map(flower=>flower.map(fn=>`<li>${fn.commonName} </li>`).join("")).join("")}</ul>
    <ul>Colors: ${matchingColors.map(col=>col.map(mc=>`<li>${mc.color}`).join("")).join("")}</ul>
    </section>
  `
}

export default retailerComponent

