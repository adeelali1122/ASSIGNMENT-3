/* Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, 
and titlecase. */

let personName: string = "Ali Uz Zaman";

console.log(personName.toLowerCase());
console.log(personName.toUpperCase());


//titlecase // Title Case
let personName01:string = "I am learning typescript";

//step 01
let words:string[]= personName01.split(" ");
// step 02
let titleCaseName:string = " "

//step 03
for (let i = 0; i < words.length; i++) {
    titleCaseName +=words[i].charAt(0).toUpperCase()+words[i].slice(1).toLowerCase() +" ";

}
    
console.log("Titlecase:" ,titleCaseName)
