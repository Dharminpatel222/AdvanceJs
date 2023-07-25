        let date = new Date("2023-02-12");
        let gettime = date.getTime();
        console.log(date);
        console.log(
            "gettime",
            gettime,
            date.getDate(),
            date.getFullYear(),
            date.toISOString()
        );

        console.log(
            "gettime",
            gettime,
            date.getDate(),
            "-",
            date.getMonth(),
            "-",
            date.getFullYear()
        );
   