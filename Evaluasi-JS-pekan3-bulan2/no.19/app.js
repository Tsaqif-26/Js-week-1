
import { toJSON,toObject } from "./konversi.js";

let random = {id: 20, name: "loi"}

let json = toJSON(random)
console.log(json);

let obj = toObject(json)
console.log(obj);


