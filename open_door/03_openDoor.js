/*
Open Door
Return true if name is Simon and hasCoffee is true.
Otherwise return false.
Test your solution:
npm test

(requires jest: npm i -g jest)
*/

function openDoor(input) {
    // Your code here
    // Google JS syntax ;)
    let open = false

    while (!open &&
        input.length > 0) {
        a = input.pop()
        if (a.name == 'Simon' && a.hasCoffee == true)
            open = true
    }

    return open

}
module.exports = {
    openDoor
}