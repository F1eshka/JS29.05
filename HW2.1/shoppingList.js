let shoppingList = [
    { name: "Хліб", quantity: 1, bought: false },
    { name: "Молоко", quantity: 2, bought: true },
    { name: "Яблука", quantity: 5, bought: false }
];

function showList() {
    console.log("Список покупок:");
    const notBought = shoppingList.filter(item => !item.bought);
    const bought = shoppingList.filter(item => item.bought);

    [...notBought, ...bought].forEach(item => {
        console.log(`- ${item.name} (${item.quantity}) — ${item.bought ? "куплено" : "не куплено"}`);
    });
}

function addProduct(productName, quantity) {
    let existing = shoppingList.find(item => item.name.toLowerCase() === productName.toLowerCase());

    if (existing) {
        existing.quantity += quantity;
    } else {
        shoppingList.push({ name: productName, quantity: quantity, bought: false });
    }
}

function buyProduct(productName) {
    let item = shoppingList.find(p => p.name.toLowerCase() === productName.toLowerCase());

    if (item) {
        item.bought = true;
    } else {
        console.log("Продукт не знайдено у списку.");
    }
}


showList(); 
addProduct("Хліб", 2); 
addProduct("Сир", 1);  
buyProduct("Яблука"); 

console.log("\nПісля оновлення:");
showList();
