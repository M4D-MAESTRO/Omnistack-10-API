module.exports = (arrayAsString) => {
    return techsArray = arrayAsString.split(',').map(tech => tech.trim());
}