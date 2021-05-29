const fs = require("fs").promises;
const {v4} = require("uuid");

const readFile = require("./read-file");
/*
1. Считать json-файл.
2. Превратить его в массив.
3. Добавить в созданный файл _id с помощью uuid.
4. Запушил в конец массив новый элемент.
5. Превратить массив обратно в строку.
6. Полностью перезаписать файл обновленным массивов.
*/

// Product.find({})
// Product.find({brand: "Apple"})
// Product.create({name: "", price: ""})
// Product.findByIdAndDelete(id)
// Product.findByIdAndUpdate(id, {})

const addItem = async (filePath, item) => {
    try {
        const data = await readFile(filePath)
        const newItem = {...item, _id: v4()};
        data.push(newItem);
        const dataString = JSON.stringify(data);
        fs.writeFile(filePath, dataString);
    }
    catch(error){
        throw error;
    }
}

module.exports = addItem;