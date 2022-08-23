function squareNumber(n){
return n*n;
}

function square(array,cb){
let squared = [];
for(num of array)
squared.push(cb(num));
return squared;
}

const array = [1, 2, 3, 4, 5, 6];
square(array,squareNumber);

