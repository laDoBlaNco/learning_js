const fs = require('fs');

const data = JSON.parse(fs.readFileSync('1-json.json').toString())

data.name = 'l@D0Bl@Nco';
data.age = 46;

fs.writeFileSync('1-json.json',JSON.stringify(data));



