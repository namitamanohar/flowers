import { getFlowers } from "./flowerDataProvider.js";
import FlowerComponent from "./flowerList.js";
import { getRetailers } from "./retailersDataProvider.js";
import retailerComponent from "./retailerList.js";
import { getDistributors } from "./distributorsDataProvider.js";
import { getNurseries } from "./nurseryDataProviders.js";
import { getDistributorNursery } from "./distributorNurseryDataProvider.js";
import { getFlowerNursery } from "./flowerNurseryDataProvider.js";
import { getColors } from "./colorsDataProvider.js";

getFlowers()
.then(getColors)
.then(getFlowerNursery)
.then(FlowerComponent)

getRetailers()
.then(getNurseries)
.then(getDistributorNursery)
.then(getDistributors)
.then(retailerComponent)



