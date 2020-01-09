const flowerComponent = (flower) =>{
  return `
    <section class="flowerCard">
    <h2 class="flowerName">${flower.commonName}</h2>
    <p class="flowerColor">${flower.color}</p>
    </section>
  `
}

export default flowerComponent