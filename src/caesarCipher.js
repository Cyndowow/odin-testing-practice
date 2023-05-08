function caesarCipher(string, key) {
    let result = "";

    for(let i = 0; i < string.length; i++) {
        let charCode = string[i].charCodeAt();
        //check if letter is lower case
        if(charCode > 96 && charCode < 123) {
            charCode += key % 26; //lets key be greater than 26

            //make z loop to a and other way around
            if(charCode > 122) {
                charCode = (charCode -122) + 96;
            } else if (charCode < 97) {
                charCode = (charCode - 97) +123;
            }
        }
        //for upper case
        if (charCode > 64 && charCode < 91) {
            charCode += key % 26;
            
            if(charCode > 90) {
                charCode = (charCode - 90) + 64
            } else if (charCode < 65) {
                charCode = (charCode -65) + 91
            }
        }

        result += String.fromCharCode(charCode);
    }
    return result
}

module.exports = caesarCipher;