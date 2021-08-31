// Use the forEach method to solve these problems! All functions should return a NEW array, without mutating the old array.

/*
Input:
[
    { name: 'spot', type: 'dog' },
    { name: 'rover', type: 'dog' },
    { name: 'jumpy', type: 'frog' },
    { name: 'einstein', type: 'cat' },
]
*/

/*
Output:

['spot', 'rover', 'jumpy', 'einstein']
*/

export function makeArrayOfNames(arr) {
  const Pets = []
    arr.forEach((item) => {
        Pets.push(item.name);
    });
    return Pets;
}

/*
Output:

['cat', 'frog', 'dog', 'dog']
*/

export function makeReversedArrayOfTypes(arr) {
    const Pets = [];
        arr.forEach((item) => {
            Pets.unshift(item.type);
        });
        return Pets;
}

/*
Output:


    { nombre: 'spot', tipo: 'dog' },
    { nombre: 'rover', tipo: 'dog' },
    { nombre: 'jumpy', tipo: 'frog' },
    { nombre: 'einstein', tipo: 'cat' },

*/

export function makeSpanishLanguageArray(arr) {
    const newArr = [];
    arr.forEach((item) => {

        newArr.push(`nombre: ${item.name}, tipo: ${item.type}`);
        });
    
    return newArr;

    }