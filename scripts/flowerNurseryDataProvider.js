let flowerNursery=[]


export const useFlowerNursery =()=>flowerNursery.slice() 

export const getFlowerNursery= () => fetch("http://localhost:8088/flowerNurseries")
    .then(res => res.json())
    .then(parsedFlowerNursery => flowerNursery = parsedFlowerNursery)