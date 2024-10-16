function capitalize(name) {
    let result = '';
    const convertChar = name.charAt(0).toUpperCase();
    result += convertChar + name.slice(1, name.length - 0) 
    return result;
}
console.log(capitalize('s'))
module.exports = capitalize;