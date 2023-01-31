// declaration
let number = document.getElementById("number");
let generate = document.querySelector(".generate");



//input button
generate.addEventListener("click",
    function () {
        // debugger;
        const N = parseInt(number.value);   //  declare N 
        let array = new Array(N);;   // generate array with N element




        for (let i = 0; i < N; i++) {
            array[i] = new Array(10); // add N array with 10 element
        }


        for (let i = 0; i < N; i++) {   // add element
            for (let j = 0; j < 10; j++) {
                array[i][j] = Math.floor(Math.random() * 100) + 1;
            }
        }

        for (let i = 0; i < N; i++) {   // print element
            console.log(`${i + 1} array: `);
            for (let j = 0; j < 10; j++) {
                console.log(array[i][j]);
            }
            console.log("\n\n");
        }


    }


)






