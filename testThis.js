let test = {
    facebook: 3207477,
    google: 0,
    twitter: 155
};

function testThis(data) {
    const dataset = [];
    for (let key in data) {
        dataset.push({label: key, count: data[key]});
    }
    return dataset;
}

console.log(testThis(test));
