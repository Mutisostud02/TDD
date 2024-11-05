function cipher(text, shift) {
    let encryptedText = '';

    for (const char of text) {
        if (char >= 'a' && char <= 'z') {
            const newCharCode = ((char.charCodeAt(0) - 97 + shift) % 26) + 97;
            encryptedText += String.fromCharCode(newCharCode);
        } else if (char >= 'A' && char <= 'Z') {
            const newCharCode = ((char.charCodeAt(0) - 65 + shift) % 26) + 65;
            encryptedText += String.fromCharCode(newCharCode);
        } else {
            encryptedText += char;
        }
    }
    return encryptedText;
}
module.exports = cipher;