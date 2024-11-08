
let start = parseInt(prompt("Enter Start of the Range:"));
let end = parseInt(prompt("Enter End of the Range:"));

if(start < end){
    while(start <= end){
        console.log("Range count: ",start);
        start++;
    }
} else console.log('Invalid input.');