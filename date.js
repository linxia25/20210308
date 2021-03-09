var fs = require('fs');

const date = new Date('March 8, 2021 16:24:00');

console.log(date);

fs.writeFile('./logs/greet.txt', `${date}`, function (err) {
    if (err) {
        return console.log(err);
    } else {
        console.log('ok.');
    }
});