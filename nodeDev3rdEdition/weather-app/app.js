const request = require('request');

const url = 'http://api.weatherstack.com/current?access_key=5f5fd994530adad8a8a75e21c428e9e9&query=37.8267,-122.4233';

request(url,(err,resp)=>{
    const data = JSON.parse(resp.body);
    console.log(data.current);
     
})