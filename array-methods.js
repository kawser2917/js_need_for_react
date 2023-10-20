// Map 

const products = [
    {name:"Laptop", price: 42200, brands: "Hp", color:"Silver"},
    {name:"Phone", price: 32200, brands: "Apple", color:"Black"},
    {name:"Watch", price: 3000, brands: "Casio", color:"golden"},
    {name:"sunglass", price: 200, brands: "Ray", color:"Black"},
    {name:"Camera", price: 9200, brands: "canon", color:"Black"},
]

const productBrand = products.map(products => products.brands)
// console.log(productBrand)

//  forEach
products.forEach(product => {
    console.log(product.color)
    if(product.color === "Black"){
        console.log("Black is coming")
    }
    else{
        console.log(product.color)
    }
})