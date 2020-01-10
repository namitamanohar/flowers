let distributorNursery=[]

export const useDistributorNursery =()=>distributorNursery.slice() 

export const getDistributorNursery= () => fetch("http://localhost:8088/distributorNurseries")
    .then(res => res.json())
    .then(parsedDistributorNursery => distributorNursery = parsedDistributorNursery)