function capitalize(str) {
    let newString = str.charAt(0).toUpperCase() + str.slice(1);

    return newString;
}

module.exports = capitalize;