
        let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
        let newArr = arr.map((e, i) => {
            console.log("e->", e);
            console.log("i->", i);
            return e + 1;
        });
        console.log("arr->", arr);
        console.log("newArr->", newArr);

        // reducer
        let total = arr.reduce((lastEle, ele) => {
            console.log("LastEle->", lastEle);
            console.log("e->", ele);
            return lastEle + ele;
      
        });
        console.log("total->", total);

        // filter //
        let filteredArr = arr.filter((e) => e > 5);
        console.log("filteredArr->", filteredArr);

        // reverse //
        console.log("arr->", arr);
        arr.reverse();
        console.log("reversed arr->", arr);

        // sort
        // todo  have to sort array
        let sortArr = [1, 30, 32, 4, 21, 100000];

        sortArr.sort();
        console.log("sort sortArr->", sortArr);

        // keys
        let keys = arr.keys();
        console.log("keys->", keys);

        for (const key of keys) {
            console.log(key);
        }
