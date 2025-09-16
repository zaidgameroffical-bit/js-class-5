// var arr = [10, 20,true,"zaid",undefined];




// slice() ===> array,number,string

// arr.slice(0,4)

// var copy = arr.slice(0,3) 








// arr.splice( 2, 0, 100000, 250000)
// arr.unshift(500)
// arr.pop();
// arr.pop();
// console.log(copy)






// FOR LOOP

// for(var a = 10;a>=  1;a-- ){
//     document.write(a, "<br>")
// }













// while loop

// do-while loop










// var tabelNumber = +prompt("enter a number");
// var tabelRange = +prompt("enter range");

// for(var i = 1; i <=tabelRange; i++){


// document.write(tabelNumber,"x", i ,"=", tabelNumber * i ,"<br>");
// }


// var userinput = prompt("Enter a month");

// var inputlen = userinput.lenght;

// var shortform;

// if(inputlen > 3){
//     shortform = userinput.slice(0,3);

// }

// console.log(shortform);


//  var str = prompt("Enter some text");
//   var numChars = str.length;
//   for (var i = 0; i < numChars;
//  i++) {
//    if (str.slice(i, i + 2) === " ") {
     
// alert("No double spaces!");
//    }
// }




// var str = "hello assalamualikum my name is zaid"


// var findIndex = str.indexOf("zaid");

// var replaceText = "salman";

// var remaimText = str.slice(0,findIndex)


// console.log(remaimText + replaceText)













//  var firstChar = text.indexOf("World War II");
//  if (firstChar !== -1) {
    //    text = text.slice(0, firstChar) + "the Second World War" + text.slice(firstChar + 12);
    //  }
    
    
    
    
    
    
    
    
//   var str =  " The history of science spans thescience whole of sciencethescience historicalscience record "

// console.log(str.replaceAll("science","computer"));




// var str = "to be or not to be "

// console.log(str.lastIndexOf("be"))





// var headUser = prompt("Enter head username")

// var tailUser = prompt("Enter tail username")

// var toss = Math.round(Math.random());

// if (toss === 0) {
//     console.log(headUser, "win the game");
// } else {
//         console.log(tailUser, "win the game");

// }












function getRandomChar() {
  let numbers = "0123456789";
  let alphabets = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
  let specials = "!@#$%^&*()_+[]{}<>?/|";
  
  let allChars = numbers + alphabets + specials;

  let randomIndex = Math.floor(Math.random() * allChars.length);

  return allChars[randomIndex];
}


function getRandomString(length) {
  let result = "";
  for (let i = 0; i < length; i++) {
    result += getRandomChar();
  }
  return result;
}

console.log(getRandomString(10)); 


































































































