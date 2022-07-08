console.log('hi')
const test1 = [0, 1, 2]
const test2 = [2,6,8,10,3]
const test3 = [0,0,3,0,0]
const test4 = [1,1,0,1,1]
const testfail1 = [-5154897,19227985,-126312739,108090361,70854967,196806339,-157498921,42709423,-14015903,49647559,15086979,-9603425,-96600547,19454849,53653978,64603631]

function findOutlier(integers) {
    const even = integers.filter(element => element % 2 === 0);
    const odd = integers.filter(element => element % 2 != 0);
    console.log('even: ', even);
    console.log('odd: ', odd);
    
    if (even.length > 1){
        return odd;
    } else {
        return even;
    }

    //even.length > 1 ? odd : even
};
    
/*console.log('soma do array:', integers.reduce((previousValue, currentValue) => previousValue + currentValue))
    if (integers.reduce((previousValue, currentValue) => previousValue + currentValue) % 2 === 0) {
        return even;
    } else {
        return odd;
    }*/
    //return integers.reduce((previousValue, currentValue) => previousValue + currentValue, 0);
    //integers.filter(element => element % 2 != 0);

console.log('outlier:', findOutlier(test1));