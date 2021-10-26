function snapCrackle(maxValue) {
  let numero = [];

  for (let counter = 1; numero.length < maxValue; counter++) {
    if (counter % 2 !== 0 && counter % 5 === 0) {
      numero.push("SnapCrackle");
    } else if (counter % 2 !== 0) {
      numero.push("Snap");
    } else if (counter % 5 === 0) {
      numero.push("Crackle");
    } else {
      numero.push(counter);
    }
  }
  return numero.join(",");
}
console.log(snapCrackle(15));
