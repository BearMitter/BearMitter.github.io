var list = new Array(75);

for (var i = 0; i < 75; i++) {
    list[i] = i + 1;
}

test("Returns about-us for english language", () => {
    expect(getAboutUsLink("en-US")).toBe("/about-us");
});


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