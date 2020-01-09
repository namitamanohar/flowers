import { getFlowers } from "./flowerDataProvider.js";
import FlowerComponent from "./flowerList.js";

getFlowers()
.then(FlowerComponent)
