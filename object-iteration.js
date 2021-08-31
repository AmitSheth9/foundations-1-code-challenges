// user Object.values and Object.key to solve these problems!

/*
Input: 
{
    wheels: 8,
    type: 'truck',
    goes: 'vroom',
}
*/


/*
Output:
`wheelstypegoes`
or
`goeswheelstype`
or
`wheelsgoestype`
,
etc

(we cannot control the order that these appear in without extra work, so any of these outputs are acceptable)
*/

export function makeWeirdStringFromKeys(someObject) {
    let acc = '';
    for(let key in someObject) {
        acc = acc + key;

    }
    return acc;
}


/*
Output:
{
    WHEELS: 8,
    TYPE: 'truck',
    GOES: 'vroom',
}
*/

export function makeMoreScreamingKeys(someObject) {
    let acc = '';
    for(let key in someObject) {
        acc = acc + ` ${key.toUpperCase()} : ${someObject[key]},`;
    }
    return acc;
}

/*
Output:
[ 
    ['wheels', 8],
    ['type', 'truck'],
    ['goes', 'vroom'],
]
*/

export function makeTuples(someObject) {
    return Object.keys(someObject).map(function (key){
        return [(key), someObject[key]];
    });

}
