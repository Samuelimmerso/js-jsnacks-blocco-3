// declaration
let number = document.getElementById("number");
let add = document.querySelector(".add");
let sum = 0



add.addEventListener("click",
    function () {

        while (sum + parseInt(number.value) > 50 && sum != 50) {    //loop until user insert a number in the range
            console.log("Il numero supera il range...riprovare.");
            return;
        }

        if (sum < 50) { // if sum < 50 continue to add numbers
            sum += parseInt(number.value);
            console.log(number.value);
        } else {    //else seek the button 
            add.classList.add("vanish");
        }

        console.log(sum);   //print sum
    }

)




