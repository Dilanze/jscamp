
function addToCart(productName = "Elma", quantity) {
    console.log("Sepete EKlendi" + productName + "adet: " + quantity)
}
// addToCart("Elma")
addToCart("Yumurta", 10)
// addToCart("Karpuz")

let sayHello = () => {
    console.log("Hello world")
}
sayHello()

let sayHello2 = function () {
    console.log("Hello world 2 ")
}
sayHello2();

function addToCart3(productName, quantity, unıtPrice) {

}

addToCart3("Elma", 5, 10)
addToCart3("Armut", 5, 10)
addToCart3("Limon", 5, 10)

let product1 = { productName: "Elma", unıtPrice: 10, quantity: 5 }

function addToCart2(product) {
    console.log("Ürün: " + product.productName)
    console.log("Adet: " + product.quantity)
    console.log("Fiyat: " + product.unıtPrice)


}

addToCart2(product1)
let product2 = { productName: "Elma", unıtPrice: 10, quantity: 5 }
let product3 = { productName: "Elma", unıtPrice: 10, quantity: 5 }

product2 = product3
product2.productName = "KARPUZ"
console.log(product3.productName)

//çıktı karpuz olur 

// sayılar değer tip, objeler arrayler refereans tip, streck heap streack:sayı heap:objeler vs

function addToCart4(products) {
    console.log(products)

}
// 2 products aynı sey değil
let products = [
    { productName: "Elma", unıtPrice: 10, quantity: 5 },
    { productName: "Armut", unıtPrice: 10, quantity: 5 },
    { productName: "Karpuz", unıtPrice: 10, quantity: 5 }
]
// 4 products yerine x yazarsak outputu sorun çıkmaz
addToCart4(products)

// function add1(number1, number2) {
//     console.log(number1 + number2)

// }
function add(...numbers) { //rest opeatörü
    let total = 0
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i]


    }
    console.log(total)


}
// rest dısında bir şey varsa parametrenın önune yazılır

add(20, 30)
// add(20, 30, 40)
// add(20, 30, 40, 50)

let numbers = [30, 10, 500, 600, 120]
//console.log(...numbers)// spread ayrıştırır
console.log(Math.max(...numbers))

// console.log(Math.max(30,10,500,600,120))
// en buyugunu verır 

let [icAnadolu, marmara, karadeniz, [icAnadoluSehirleri]] = [
    { name: "İç Anadolu", population: "20M" },
    { name: "Marmara", population: "50M" },
    { name: "Karadeniz", population: "10M" },
    [
        ["Ankara", "Konya"],
        ["İstanbul", "Bursa"],
        ["Rize", "Trabzon"],
    ]
]

// console.log(regions[0])
console.log(icAnadolu)
console.log(marmara.name)
console.log(icAnadoluSehirleri)

let newProductName, newUnıtPrice, newQuantity
({ productName: newProductName, unıtPrice: newUnıtPrice, quantity: newQuantity } = { productName: "Elma", unıtPrice: 10, quantity: 5 })

console.log(newProductName)

login({ title }){

    console.log("<h1>" + title + )
}





