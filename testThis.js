let test = {
    facebook: 3207477,
    google: 0,
    twitter: 155,
    total: 8142
};

function testThis(data) {
    const returnMe = data.facebook.toString().split("");
    for (let i = toTest.length; i > 3; i -= 3) {
        toTest.splice(i-3, 0, ",");
    }
    return returnMe.join("");
}

console.log(testThis(test));
