const StayleSwitcherToggle=document.querySelector(".style-switcher-toggler");
StayleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
    
})

window.addEventListener("scroll",() =>{
    if (document.querySelector(".style-switcher").classList.contains("open")) {
        document.querySelector(".style-switcher").classList.remove("open")
    }
})

const alternatStyles= document.querySelectorAll(".alternate-style");
function setActiveStyle(item) {

    alternatStyles.forEach((rang) => {
        if (item === rang.getAttribute("title") ) {
            rang.removeAttribute("disabled");
        }
        else{
            rang.setAttribute("disabled","true");
        }
    });    
}



// Oq va Qora

const dayNight=document.querySelector(".day-night");
dayNight.addEventListener("click",()=>{
    dayNight.querySelector("i").classList.toggle("fa-sun");
    dayNight.querySelector("i").classList.toggle("fa-moon");
    document.body.classList.toggle("dark");
})
window.addEventListener("load",()=>{
    if (document.body.classList.contains("dark")) {
        dayNight.querySelector("i").classList.add("fa-sun");
        document.querySelector(".sun-moon").style.background="#f021b2"
    }
    else{
        dayNight.querySelector("i").classList.add("fa-moon");
    }
})




