var beer, wall, bottles, take

beer = 99
bottles = "bottles of beer"
wall = "on the wall, "
pwall = "on the wall. "
take = ". Take one down, pass it around. "

for (var beer = 99; beer > 2; beer--) {
  console.log(beer + " " + bottles + " "  + wall + beer + " " + bottles + take + (beer - 1) + " " + bottles + " " + pwall);
}
  console.log(beer + " " + bottles + " "  + wall + beer + " " + bottles + take + (beer - 1) + " bottle of beer" + " " + pwall);
  console.log("No more " + bottles + " " + wall + "no more " + bottles + ". Go to the store and buy some more, " + 99 + " " + bottles + " " + pwall);
