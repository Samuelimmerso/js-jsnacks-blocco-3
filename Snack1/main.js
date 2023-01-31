// declaration
let min = document.getElementById("min");
let max = document.getElementById("max");
let generate = document.getElementById("generate");
let print = document.getElementById("print");
let randNumber;

//click generate 
generate.addEventListener("click",
    function () {

        // loop until generate a number <= max and >= min
        do {
            randNumber = Math.floor(Math.random() * max.value) + parseInt(min.value);
        } while (randNumber < min.value || randNumber > max.value);

        print.innerHTML = `Numero Generato: ${randNumber}`;     //print










    }


)