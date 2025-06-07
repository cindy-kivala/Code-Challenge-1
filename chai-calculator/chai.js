function calculateChaiIngredients(numberOfCups) {
    const water = numberOfCups * 200;
    const milk = numberOfCups * 50;
    const teaLeaves = numberOfCups * 1;
    const sugar = numberOfCups * 2;
    
    console.log(`To make ${numberOfCups} of Kenyan Chai, you will need:`);
    console.log(`Water: ${water} ml`);
    console.log(`Milk: ${milk} ml`);
    console.log(`Tea Leaves (Majani): ${teaLeaves} tablespoons`);
    console.log(`Sugar (Sukari): ${sugar} teaspoons`);
    console.log(`/Enjoy your Chai Bora!`);
}
const cups = Number(prompt("Karibu! How many cups of Chai Bora would you like to make?"));
calculateChaiIngredients(cups);