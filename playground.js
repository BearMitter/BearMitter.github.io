console.log("hello")


console.log(Math.E);

console.log(Math.sign(-324));


var arr = [1, 2, 3];

arr.splice(3, 0, 4);

console.log(arr);




var list = new Array(75);

for (var i = 0; i < 75; i++) {
    list[i] = i + 1;
}




shuffleArray(list);


for (var i = 0; i < 75; i++) {
    console.log(list[i]);
}



function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function shuffleArray(array) {

    for (var i = array.length - 1; i > 0; i--) {
        var j = getRandomInt(i + 1);
        temp = array[j];
        array[j] = array[i];
        array[i] = temp;
    }

}