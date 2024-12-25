
function checkMonth(){
    const month = document.getElementById("choices").value;
    if(parseInt(month)===1){
        document.querySelector(".result").textContent = "January";
    }else if(parseInt(month)===2) {
        document.querySelector(".result").textContent = "February";
    }else if(parseInt(month)===3) {
        document.querySelector(".result").textContent = "March";
    }else if(parseInt(month)===4) {
        document.querySelector(".result").textContent = "April";
    }else if(parseInt(month)===5) {
        document.querySelector(".result").textContent = "May";
    }else if(parseInt(month)===6) {
        document.querySelector(".result").textContent = "June";
    }else if(parseInt(month)===7) {
        document.querySelector(".result").textContent = "July";
    }else if(parseInt(month)===8){
        document.querySelector(".result").textContent = "August";
    }else if(parseInt(month)===9){
        document.querySelector(".result").textContent = "September";
    }else if(parseInt(month)===10){
        document.querySelector(".result").textContent = "October";
    }else if(parseInt(month)===11){
        document.querySelector(".result").textContent = "November";
    }else if(parseInt(month)===12){
        document.querySelector(".result").textContent = "December";
    }else if(parseInt(month)===0){
        document.querySelector(".result").textContent = "Enter a valid number...";
    }else if(parseInt(month)>=13){
        document.querySelector(".result").textContent = "Enter a valid number...";
    }
        

}