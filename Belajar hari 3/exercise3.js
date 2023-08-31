// Example : ‘The QuiCk BrOwN Fox’ -> ‘ tHE qUIcK bRoWn fOX’
var str = "The QuiCk BrOwN Fox";
var output = "";

for (var i = 0; i < str.length; i++) {
  var char = str[i];
  if (char === char.toUpperCase()) {
    
    output += char.toLowerCase();
  } else if (char === char.toLowerCase()) {
    output += char.toUpperCase();
  } else {
    output += char;
  }
}

// print the output string
console.log(output); // hELLO wORLD!
