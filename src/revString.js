function revString(string) {
    if(typeof string !== "string") {
    return "Not a string"
    }
    if(string === null || string === undefined || string === "") {
        return "String is empty";
    }

    const strToArr = [...string];
    return strToArr.reverse('').join('');
    
    
}
module.exports = revString; 