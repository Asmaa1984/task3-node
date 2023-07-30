const request = require("request");
const forecast = (latitude , longtitude, callback)=>{
    const url2 = `https://api.weatherapi.com/v1/current.json?key=7f97e74ef23b418c97a155211230503&q=${latitude},${longtitude}`;
    request({url:url2 , json:true},(error , response)=>{
        if(error){
            callback("you can't reach to this website" , undefined)
        }
        else if(response.body.error){
            callback(response.body.error.message  , undefined)
        }
        
        else{
            callback(undefined ,`country is ${response.body.location.name}, condition is ${response.body.current.condition.text} and temp is ${response.body.current.temp_c}C`);
            //console.log(response.body.location.name , response.body.current.condition.text)
        }
});

};
const callback1 = 
module.exports = {forecast}