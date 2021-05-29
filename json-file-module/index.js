const path = require("path");

const {jsonReader} = require("./utils");

const {jsonRead, addItemToJson, removeItemFromJson} = jsonReader;

const ProductsPath = path.join(__dirname, "files", "products.json");

const fileRequest = jsonRead(ProductsPath);

fileRequest
    .then(file => console.log(file))
    .catch(error => console.log(error))

// const newProduct = {
//     "name": "GeForce RTX 3800",
//     "price": 80000
// };

/*
const express = require("express");
const app = express(); // app - наш сервер

app.post("/products", express.json(), (req, res, next)=> {
    const {body} = req;
    const addItemToJson(ProductsPath, body);
})
*/

// addItemToJson(ProductsPath, newProduct);

// removeItemFromJson(ProductsPath, "38875cb0-69aa-4830-9335-d6d2146cf0b8")