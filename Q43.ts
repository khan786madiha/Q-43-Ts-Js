// 43.	Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

// 1st WAY
function show_magicians(magicians: string[]): void {
  magicians.forEach((magician) => {
      console.log(magician);
  });
}
function make_great(magicians: string[]): string[] {
  const modifiedMagicians: string[] = [];
  for (let i = 0; i < magicians.length; i++) {
      modifiedMagicians.push("the Great " + magicians[i]);
  }
  return modifiedMagicians;
}
const magicianNames: string[] = ["Harry Houdini", "David Copperfield", "Penn Jillette", "Teller"];

const modifiedMagicians: string[] = make_great([...magicianNames]); // Passing a copy of magicianNames

show_magicians(magicianNames); // Showing the original array
console.log("\n"); // Adding a new line for clarity
show_magicians(modifiedMagicians); // Showing the modified array

// 2nd way
// function show_magicians(magicians: string[]): void {
//   console.log("Magicians:");
//   for (const magician of magicians) {
//     console.log(magician);
//   }
// }

// function make_great(magicians: string[]): string[] {
//   const greatMagicians: string[] = [];

//   for (const magician of magicians) {
//     greatMagicians.push(`${magician} the Great`);
//   }

//   return greatMagicians;
// }

// const magicianNames: string[] = ["David Copperfield", "Harry Houdini", "Penn Jillette", "Teller"];

// const greatMagicians = make_great([...magicianNames]); 

// show_magicians(magicianNames);

// show_magicians(greatMagicians);
