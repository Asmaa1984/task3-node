const fs = require("fs");
const forecast1 = require("./forecast");
const forecast = forecast1.forecast;
const geocode = require("./geocode")

const location2 = process.argv[2]||""

geocode(location2,(error , response)=>{
    if(error){
        console.log(error)
    }
    if(response){
        forecast(response.latitude , response.longtitude , (error , response)=>{
            if(error){
                console.log(error)
            }
            if(response){
                console.log(response)
            }
        } )
    }
} )
