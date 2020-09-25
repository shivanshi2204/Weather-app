const names= ['Shivanshi', 'Anjeev', 'Prema']
const shortnames= names.filter((name)=> {
    return name.length <=5
})

// const geocode= (address, callback) => {   //undefined is printed immediately because we are not immediately getting any value back

//     setTimeout(()=> {
//         const data= {
//             latitude: 0,
//             longitude: 0
//         }
//         return data
//     }, 2000)
// } //so the return pttern is not going to work when we are tryinh to do asynchronous things
/*solution*/
const geocode= (address, callback) => {   

    setTimeout(()=> {
        const data= {
            latitude: 0,
            longitude: 0
        }
        callback(data)
    }, 2000)
} 
//if we use normal synchronous fn, return will do the work but whenever we use asynchronous fn, we use callback

geocode('London' , (data)=>{
    console.log(data)
})


// Goal: Mess around with the callback pattern
//
// 1. Define an add function that accepts the correct arguments
// 2. Use setTimeout to simulate a 2 second delay
// 3. After 2 seconds are up, call the callback function with the sum
// 4. Test your work!
const add= (data1, data2, callback) => {
    setTimeout(() => {
        const ans= data1+ data2
        callback(ans)
    }, 2000)
    
}
add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})