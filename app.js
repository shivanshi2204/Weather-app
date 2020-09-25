/* basics of asynchronous programming */

// console.log('Starting')

// setTimeout(()=>{
//     console.log('2 Second Timer')
// }, 2000)

// setTimeout(()=>{
//     console.log('0 Second Timer')
// }, 0)


// console.log('Stopping')
const request= require('request')
const geocode=  require('./utils/geocode')
const forecast=  require('./utils/forecast')

// const url= "https://api.openweathermap.org/data/2.5/onecall?lat=27.2048&lon=77.4975&%20exclude=hourly,daily&appid=5b6b2f89fef6bbdf10792c33c1786e09&units=metric"
// request({url: url, json: true}, (error, response)=>{
//     if(error){
//         console.log('Unable to connect to weather service!')
//     }
//     else if(response.body.error){
//         console.log('Unable to find location')
//     }
//     else{
//         console.log('It is currently '+ response.body.current.temp + ' degree Celsius out. There is ' + response.body.current.humidity + '% humidity')
//     } 
    
//     //console.log(response.body.current)
//     //console.log(response)
//     //const data= JSON.parse(response.body)
//     //console.log(data.daily)
// })

// const geocodingurl= "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoic2hpdmFuc2hpZ3VwdGEiLCJhIjoiY2tmZ3pwYTQ2MGRpaTJzcWtpejg3ZTlwdCJ9.TeCKdsRV3HNZfW6fhVbfJw&limit=1"

// request({url: geocodingurl , json: true}, (error, response)=>{
//     if(error){
//         console.log('Unable to connect to location services!')
//     }
//     else if(response.body.features.length===0){
//         console.log('Unable to find location. Try another search!')
//     }
//     else{
//         const latitude= response.body.features[0].center[1]
//         const longitude= response.body.features[0].center[0]
//         console.log(latitude, longitude)
//     }
// })

//console.log(process.argv)
const address= process.argv[2]
if(!address){
    console.log('Please provide a location!')
}
else{
geocode(address, (error, {latitude, longitude, location})=>{
    if(error){
        return console.log(error)
    }
    
    forecast(latitude, longitude, (error, forecastdata) => {
        if(error){
            return console.log(error)
        }   
        console.log(location)
        console.log(forecastdata)
     })
})
}

// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

