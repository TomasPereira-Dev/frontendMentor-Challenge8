const navBar = document.querySelector(".navbar");
const ul = document.querySelector(".links");
const hamburgerBtn = document.createElement("img");
hamburgerBtn.setAttribute("class", "hamburger-btn");
hamburgerBtn.setAttribute("src", "./images/icon-hamburger.svg");


window.addEventListener("load", () => {
    const screenWidth = window.innerWidth;
    if(screenWidth <= 425){
        ul.setAttribute("class", "mobile-links");
        navBar.appendChild(hamburgerBtn)
    }
})

window.addEventListener("resize", () => {
    const screenWidth = window.innerWidth;
    if(screenWidth <= 425){
        ul.setAttribute("class", "mobile-links");
        navBar.appendChild(hamburgerBtn)
    }
    else if(screenWidth > 425){
        hamburgerBtn.remove();
    }
})

hamburgerBtn.addEventListener("click", () => {
    if(!ul.classList.contains("close")){
        ul.style.display = "flex";
    }else{
        ul.style.display = "none"
    }
    ul.classList.toggle("close");
})
    
