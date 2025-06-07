function estimateTransactionFee(amountToSend) {
    let percentageFee = amountToSend * 0.015;
    let fee;
    if (percentageFee < 10) {
        fee = 10;
    } else if (percentageFee > 70) {
        fee = 70;
    } else {
        fee = percentageFee;
    }
   const total = amountToSend + fee;

    console.log(`Sending KES ${amountToSend}:`);
    console.log(`Calculated Transaction Fee: KES ${fee}`);
    console.log(`Total amount to be debited: KES ${total}\n`);
    console.log("Send Money Securely!");
}

const amount = Number(prompt("Unatuma Ngapi? (KES):"));
estimateTransactionFee(amount);