const palindromes = function (str) {
    const s = str.toLowerCase().replace(/[^a-z]/g, "");
    return s.split("").reverse().join("") == s;
};

// Do not edit below this line
module.exports = palindromes;
