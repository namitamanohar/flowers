const flowerComponent = (flower,color) =>{
  return `
    <section class="flowerCard">
    <h2 class="flowerName">${flower.commonName}</h2>
    <p class="flowerColor">${color.color}</p>
    </section>
  `
}

export default flowerComponent