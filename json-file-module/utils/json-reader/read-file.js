const fs = require("fs").promises;

const jsonRead = async (filePath) => {
    try {
        const file = await fs.readFile(filePath);
        const data = JSON.parse(file);
        return data;
    }
    catch(error){
        if(error.code === "ENOENT"){
            error.message = "Неправильное имя или путь к файлу";
        }
        if(error.message.includes("Unexpected token")){
            error.message = "Неправильный формат JSON-файла";
        }
        // console.log(error.code);
        // console.log(error.message);
        throw error;
    }
}

module.exports = jsonRead;