function Fruit(nameFruit, grams, pricePerKg) {
    let needPrice = grams / 1000 * pricePerKg;
    console.log(`I need $${needPrice.toFixed(2)} to buy ${(grams/1000).toFixed(2)} kilograms ${nameFruit}.`)
}
Fruit('apple', 1563, 2.35);