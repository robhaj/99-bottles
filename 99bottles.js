var beer, wall, bottles, take

beer = 99
bottles = "bottles of beer"
wall = "on the wall"
take = ". Take one down, pass it around. "

for (var beer = 99; beer > 0; beer--) {
  console.log(beer + " " + bottles + " "  + wall + ", " + beer + " " + bottles + take + (beer - 1) + " " + bottles + " " + wall + ".")
}
