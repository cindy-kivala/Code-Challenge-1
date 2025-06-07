function calculateBodaFare(distanceInKm) {
    const baseFare = 50;
    const chargePerKm = 15;

    const totalFare = baseFare + (distanceInKm * chargePerKm);

    console.log(`Uko kwote? Io ni ${distanceInKm} km:`);
    console.log(`Ukikalia Pikipiki: KES ${baseFare}`);
    console.log(`Mpaka Uko: KES ${distanceInKm * chargePerKm}`);
    console.log(`Total: KES ${totalFare}\n`);
    console.log(`Panda Pikipiki!`);
}
const distance = Number(prompt("Unafika wapi Mkubwa? Kilometer ngapi?:")
);/*Noticed that when this part is in the previous line, it gives me trouble when going live*/
calculateBodaFare(distance);