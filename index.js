function getFroyoFlavors() {
  let flavorsInput = prompt("Enter a list of froyo flavors (comma-separated):");

  if (flavorsInput) {
    let flavorsArray = flavorsInput.split(",").map(flavor => flavor.trim());

    let flavorCount = {};
    for (let flavor of flavorsArray) {
      if (flavorCount[flavor]) {
        flavorCount[flavor]++;
      } else {
        flavorCount[flavor] = 1;
      }
    }
    console.table(flavorCount);
  } else {
    console.log("No flavors were entered.");
  }
}
