const allPhones = [
    {name: 'nokia', price: 28000, color: 'white', storage: 4},
    {name: 'samsung', price: 42000, color: 'white', storage: 4},
    {name: 'realme', price: 22000, color: 'white', storage: 4},
    {name: 'oppo', price: 20000, color: 'white', storage: 4},
    {name: 'htc', price: 32000, color: 'white', storage: 4},
    {name: 'huawei', price: 18000, color: 'white', storage: 4}
];
function cheapestPhone(phones){
let cheapest = phones[0];
for(const phone of phones){
    if(phone.price < cheapest.price){
        cheapest = phone;
    }
}
return cheapest;
}
const getCheapestPhone = cheapestPhone(allPhones);
console.log(getCheapestPhone);