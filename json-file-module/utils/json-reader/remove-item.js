const fs = require("fs").promises;

const readFile = require("./read-file");

const removeItem = async (filePath, id) => {
    try {
        const data = await readFile(filePath);
        const newData = data.filter(({_id}) => _id !== id);
        const dataString = JSON.stringify(newData);
        fs.writeFile(filePath, dataString);
    }
    catch(error){
        throw error;
    }
}

module.exports = removeItem;