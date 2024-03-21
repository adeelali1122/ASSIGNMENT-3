/* Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase,
and titlecase. */
var personName = "Ali Uz Zaman";
console.log(personName.toLowerCase());
console.log(personName.toUpperCase());
//titlecase // Title Case
var personName01 = "I am learning typescript";
//step 01
var words = personName01.split(" ");
// step 02
var titleCaseName = " ";
//step 03
for (var i = 0; i < words.length; i++) {
    titleCaseName += words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase() + " ";
}
console.log("Titlecase:", titleCaseName);
