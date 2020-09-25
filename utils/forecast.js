const request= require('request')

const forecast = (latitude, longitude, callback) =>{
    const url= 'https://api.openweathermap.org/data/2.5/onecall?lat='+ latitude+ '&lon='+ longitude+ '&%20exclude=hourly,daily&appid=5b6b2f89fef6bbdf10792c33c1786e09&units=metric'
    request({url , json: true}, (error,{body})=>{
            if(error){
                callback('Unable to connect to weather service!', undefined)
            }
            else if(body.error===0){
                callback('Unable to find location!', undefined)
            }
            else{
                callback(undefined, 'It is currently '+ body.current.temp + ' degree Celsius out. Humidity is ' + body.current.humidity + '%.')

            }
        })
}

module.exports= forecast