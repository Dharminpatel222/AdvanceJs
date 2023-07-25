    function fun1(a,b,callback){
        let c = a+b;

    setTimeout(function(){
                return callback(c);
            },1000);
        }

        function f2(total){
            console.log(total);
        }

    fun1(5,5,f2);

