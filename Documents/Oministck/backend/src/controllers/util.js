module.exports = function parseStringsArray(arrayString){
    return arrayString.split(",").map(tech => tech.trim());
}