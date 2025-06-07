function estimateTransactionFee(amountToSend) {
    let percentageFee = amountToSend * 0.015;
    let fee = Math.ceil(Math.max(percentageFee, 10), 70);/*replace with math. for practice*/
    let total = amountToSend + fee;

    console.log(`Sending KES ${amountToSend}:`);
    console.log(`Calculated Transaction Fee: KES ${fee}`);
    console.log(`Total amount to be debited: KES ${total}\n`);
    console.log("Send Money Securely!");
}

const amount = Number(prompt("Unatuma Ngapi? (KES):"));
estimateTransactionFee(amount);
/*why does going live lead me to listing directory*/