let receipt = [
    { name: "Молоко", quantity: 2, price: 28 },
    { name: "Хліб", quantity: 1, price: 22 },
    { name: "Сир", quantity: 0.5, price: 140 },
    { name: "Яблука", quantity: 1.5, price: 35 }
];

function printReceipt() {
    console.log("🧾 Чек:");
    receipt.forEach(item => {
        console.log(`- ${item.name} x ${item.quantity} → ${item.price} грн/од. = ${(item.quantity * item.price).toFixed(2)} грн`);
    });
}

function getTotal() {
    return receipt.reduce((sum, item) => sum + item.quantity * item.price, 0);
}

function getMostExpensive() {
    return receipt.reduce((maxItem, item) => {
        return (item.quantity * item.price > maxItem.quantity * maxItem.price) ? item : maxItem;
    });
}

function getAveragePricePerItem() {
    const totalCost = getTotal();
    const totalItems = receipt.reduce((sum, item) => sum + item.quantity, 0);
    return totalCost / totalItems;
}


printReceipt();

console.log("\n💰 Загальна сума:", getTotal().toFixed(2), "грн");
console.log("🏆 Найдорожча покупка:", getMostExpensive().name);
console.log("📊 Середня вартість одного товару:", getAveragePricePerItem().toFixed(2), "грн");
