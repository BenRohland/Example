function whileSum(){
  var counter = 0;
  var total = 0;
  while (counter <= 100){
    total = total + counter;
    counter++
  }
  alert(total);
}

function doWhileSum(){
  var counter = 0;
  var total = 0;
  do {
    total = total + counter;
    counter++
  } while (counter <= 100)
  alert(total);
}

function forSum(){
  var total = 0;
  for (var counter = 0; counter <= 100; counter++){
    total = total + counter;
  }
  alert(total);
}

function isEven(){
  for(var i = 0; i <= 100; i += 1){
    if(i % 2 === 0){
      document.write(i + " Fizz<br>");
    }
    else{
      document.write(i + "Buzz<br>");
    }
  }
}

function fizzBuzz(){
  isEven();
}

function emptyArray(){
  var information = [];
  if (information.length < 1){
    alert("This is an empty array.")
  }
  else{
    alert("This array has data in it.")
  }
}

function AscIITable(){
  document.write("Decimal Number" + " | " + "ASCII" + " | " + "Hexadecimal" + "<br>")

  for(var decimalNumber = 0; decimalNumber <= 255; decimalNumber++){
  var text = String.fromCharCode(decimalNumber);
  var hexText = decimalNumber.toString(16);

  document.write(decimalNumber + " " + "&emsp;" + "&emsp;" + "&emsp;" + "&emsp;"
  + "&emsp;" + "&emsp;");
  document.write(text + "&emsp;" + "&emsp;" + "&emsp;" + "&emsp;"  + "&emsp;"
  + "&emsp;");
  document.write(hexText + "<br>");
  }
}

function eMailInput(){
  var emailCount = parseInt(prompt("How many E-Mails would you like to submit?"));
  var emails = [];

  for(var i=0;i < emailCount;i++){
    emails[i] = prompt("Please enter an E-mail");
  }
  emails.sort();
  for(var i=0;i < emails.length;i++){
    document.write(emails[i] + "<br>");
  }
}

function arrayFun(){
  var numbers = [1,2,3,4,5];
  document.write("The first number is " + numbers[0] + "<br>");
  document.write("The last number " + numbers[numbers.length-1] + "<br>");
  document.write("The third number is " + numbers[2] + "<br>");

  numbers.splice(1,1,6);
  numbers.splice(3,0,100,101,102);
  document.write("The first 5 number of the altered array are " + numbers.slice(0,5));
}

function bubbleSort(){
  var swapping = false;
  var numbers = [5,7,9,3,6];
  var arrayLength = numbers.length;
  var temp = 0;
  do{
    swapping = false;
    for(i=1;i < arrayLength;i++){
      if(numbers[i-1] > numbers[i]){
        temp = numbers[i];
        numbers[i] = numbers[i-1];
        numbers[i-1] = temp;
        swapping = true;
      }
    }
    arrayLength -= 1;
  }while(swapping === true)
  document.write(numbers)
}
