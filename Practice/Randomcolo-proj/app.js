function getcode(){
    const randomnumber = Math.floor(Math.random() * 16777215);
    const randomcode = "#" + randomnumber.toString(16);
    document.body.style.background = randomcode;
    document.getElementById("color-code").innerText = randomcode;
}

let btn = document.getElementById("btn");

btn.addEventListener("click",getcode);

getcode();

