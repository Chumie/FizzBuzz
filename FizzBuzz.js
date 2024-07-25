document.addEventListener("DOMContentLoaded", function() {
    for (i = 1; i<=100;i++) {
       var ul2 = document.getElementById("ppp");
       var li2 = document.createElement("li");
       let thistext = i;
       if (i % 3 == 0){thistext = "Fizz"};
       if (i % 5 ==0) {thistext = "Buzz"}
       if (i % 3 ==0 && i % 5 == 0) {thistext = "FizzBuzz"}
       li2.appendChild(document.createTextNode(thistext));
       ul2.appendChild(li2);
    }
});

