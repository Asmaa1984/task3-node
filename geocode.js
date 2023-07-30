const request = require("request");
const geocode =(location , callback)=>{
    const url =`https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=pk.eyJ1IjoiYXNtYWExOTg0IiwiYSI6ImNsa2kzdGYzbDBmOHYzZHBscGwzNW10ZzcifQ.3VDDiv3LGB3gponrmU-s2Q`;
    request({url , json:true}, (error , response)=>{
        if(error){
            callback("you can't reach to this website" , undefined)
        }
        else if(response.body.message){
            callback(response.body.message,undefined)
        }
        else if(response.body.features.length===0){
            callback("this country is not found" , undefined)
        }
        else{
            callback(undefined , {
                longtitude :Number( response.body.features[0].center[0].toFixed(2)),
                latitude : Number(response.body.features[0].center[1].toFixed(2)),
            })
            
    
            ;
            //console.log(response.body.location.name , response.body.current.condition.text)
        }
    
    })
    
}
module.exports = geocode