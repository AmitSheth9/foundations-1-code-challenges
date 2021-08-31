// Use the filter or find array methods to solve these problems

/* 
Input:
[
    { 
        id: 'apple',
        price: 3,
        quantity: 2,
        category: 'fruit'
    },
    { 
        id: 'banana',
        price: 1,
        quantity: 3,
        category: 'fruit'
    },
    { 
        id: 'dog food',
        price: 5,
        quantity: 1,
        category: 'other'
    },
    { 
        id: 'milk',
        price: 2,
        quantity: 1,
        category: 'dairy'
    },
        { 
        id: 'cheese',
        price: 4,
        quantity: 4,
        category: 'dairy'
    },
]

Output: 
[
    { 
        id: 'milk',
        price: 2,
        quantity: 1,
        category: 'dairy'
    },
        { 
        id: 'cheese',
        price: 4,
        quantity: 4,
        category: 'dairy'
    },
]
*/

export function getAllDairy(arr) {
 const newArray = arr.filter(grocery => {
        
        if(grocery.category === 'dairy'){
            return grocery.id;
        }
    });
    return newArray;
}

/*
Output: 
[
    { 
        id: 'apple',
        price: 3,
        quantity: 2,
        category: 'fruit'
    }
]
*/

export function getAllFruitsThatCostMoreThanTwo(arr) {
   const newArr = arr.filter(item => {
        if (item.category === 'fruit' && item.price>2)
            return item.id;
    })
    return newArr;
}


/*
Output: 
    { 
        id: 'cheese',
        price: 4,
        quantity: 4,
        category: 'dairy'
    },
*/

export function findTheCheese(arr) {
   const cheeseitem = arr.find(item => {
        if (item.id === 'cheese'){
            return item.id;
        }
    });
    return cheeseitem;

}
/*
Output: 
['apple', 'banana']
*/

export function listNamesOfAllFruits(arr) {
    const newArr = arr.filter(item => {
        if(item.category === 'fruit') {
            return item.id;
        }
    });
      let newestArr = newArr.map((thing) => {
           return thing.id;
        })
    return newestArr;
}