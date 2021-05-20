arr = [1, 2, 3, -1, -2, -3 , 4];
console.log(somePositivFunction(arr));

    function somePositivFunction(array) {

        const positivArr = [];

        if (array.length === 0){return "some error"}

        for (let i = 0; i <= array.length-1; i++){

            if (array[i] >= 0){positivArr.push(array[i])}
        }

        if (positivArr.length === 0 ){ return null }

        else{ return positivArr}
    }

