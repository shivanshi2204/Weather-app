//Object Property Shorthand

const name= 'August'
const userAge=23

const user={
    name,   //instead of name: name,
    age: userAge,
    location: 'London' 
}

console.log(user)

//Object Destructuring

const product= {
    label: 'Red Notebook',
    price: 3,
    stock: 201,
    salePrice: undefined,
    rating: 4.3
}
 /*simple method
 const label= product.label
 const stock= product.stock*/

//Destructuring syntax

const {label: productLabel, price, rating=5}= product
console.log(price)
console.log(productLabel)
console.log(rating)

//creating a functiong using above

const transactions= (type, {label, stock})=>{
    console.log(type, label, stock)
}
transactions('Order', product)