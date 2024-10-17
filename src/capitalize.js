function capitalize(name) {
    if(!name.match(/[a-z]/i)) {
        return undefined;
    }
    let result = '';
    const convertChar = name.charAt(0).toUpperCase();
    result += convertChar + name.slice(1, name.length - 0) 
    return result;
}
module.exports = capitalize;