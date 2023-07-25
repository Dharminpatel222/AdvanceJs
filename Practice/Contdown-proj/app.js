const endDate = "23 July 2023 12:00 AM"
 
document.getElementById("end-date").innerHTML = endDate;
const inputs = document.querySelectorAll("input");

function clock(){
    let end = new Date(endDate);
    let now = new Date();
    const diff = (end - now) / 1000;
    console.log(diff);
     inputs[0].value = Math.floor(diff / 3600 / 24);
     inputs[1].value = Math.floor(diff / 3600) % 24;
     inputs[2].value = Math.floor(diff / 60) % 60;
     inputs[3].value = Math.floor(diff) % 60;
}
clock();