
// Accordians Script
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}

// End Accordian Script

// Plan Toggler
let ontoggle = document.getElementById("plan-small-toggle");

    // planToggle.onmouseout(function(){
    //     ontoggle.classList.remove("plan-small-toggle-on");    
    // });
function planToggleFun(){
    ontoggle.classList.add("plan-small-toggle-on");
}

function planToggleOutFun(){
    ontoggle.classList.remove("plan-small-toggle-on");
}

// Pop up Script
let propopup = document.getElementById("proPlanPopUp");
let goldAnnualPopup = document.getElementById("popUpGoldAnual");
let goldMonthlyPopup = document.getElementById("popUpGoldMonthly");

let annualradio = document.getElementById("annual");
let monthlyradio = document.getElementById("monthly");

function openGoldPopup(){
    if(annualradio.checked == true){
        goldAnnualPopup.classList.add("open-popup");
    }
    else if(monthlyradio.checked == true){
        goldMonthlyPopup.classList.add("open-popup");
    }
}
function closeGoldPopup(){
    goldAnnualPopup.classList.remove("open-popup");
    goldMonthlyPopup.classList.remove("open-popup");
}

function openProPopup(){
    propopup.classList.add("open-popup");
}
function closeProPopup(){
    propopup.classList.remove("open-popup");
}