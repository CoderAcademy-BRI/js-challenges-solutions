/*
Write code which will return the common characters found in
two different strings. You should only need to return the
characters once.

Examples:
commonCharacters("efg", "feg") => "efg"
commonCharacters("We are both dragon energy", "I am God's vessel") => "eaodg"
commonCharacters("Alright alright alright", "") => ""

*/

const commonCharacters = (string1, string2) => {
    result = ""
    for (let char of string1.replace(/ /g, "")) {
        if (string2.includes(char) && !result.includes(char)) {
            result += char;
        }
    }
    return result;

}

module.exports = {
    commonCharacters
};