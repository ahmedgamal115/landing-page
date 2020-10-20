/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
let nav = document.getElementById("navbar__list");


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
// create Element list
let Homelist = document.createElement("li");
// create class for list
Homelist.className="btn active";
// create Element link 
let Homelink = document.createElement("a");
// create text for link 
Homelink.textContent=("Home");
// create path for link 
Homelink.href="#";
// create class Name for link 
Homelink.className = "menu__link";
// put Element in project 
nav.appendChild(Homelist);
// put Element in list 
Homelist.appendChild(Homelink);

// create Element list
let Aboutlist = document.createElement("li");
// create class for list
Aboutlist.className="btn";
// create Element link 
let Aboutlink = document.createElement("a");
// create text for link 
Aboutlink.textContent=("About");
// create path for link 
Aboutlink.href="#";
// create class Name for link 
Aboutlink.className = "menu__link";
// put Element in project
nav.appendChild(Aboutlist);
// put Element in list 
Aboutlist.appendChild(Aboutlink);

// create Element list
let Serverlist = document.createElement("li");
// create class for list
Serverlist.className="btn";
// create Element link 
let Serverlink = document.createElement("a");
// create text for link
Serverlink.textContent=("Server");
// create path for link 
Serverlink.href="#";
// create class Name for link 
Serverlink.className = "menu__link";
// put Element in project
nav.appendChild(Serverlist);
// put Element in list 
Serverlist.appendChild(Serverlink);

// create Element list
let Otherlist = document.createElement("li");
// create class for list
Otherlist.className="btn";
// create Element link 
let Otherlink = document.createElement("a");
// create text for link
Otherlink.textContent=("Other");
// create path for link 
Otherlink.href="#";
// create class Name for link 
Otherlink.className = "menu__link";
// put Element in project
nav.appendChild(Otherlist);
// put Element in list 
Otherlist.appendChild(Otherlink);

// Add class 'active' to section when near top of viewport
let li = document.querySelectorAll("li");
// loop on every element in list 
li.forEach(el => {
// add action when click
    el.addEventListener('click',(e)=>{
// remove every class "active" in element list  
        nav.querySelector(".active").classList.remove('active');
// add class "active" on buttom active
        el.classList.add("active");
    });
    
});

// Scroll to anchor ID using scrollTO event
// select part of section
let HomeSection = document.querySelector(".your-active-class");
// select part of section
let AboutSection = document.querySelector(".main__hero");
// select part of section
let serverSection = document.querySelector(".your-Server-class");
// select part of section
let otherSection = document.querySelector(".your-other-class");
// use function on scroll to add action 
window.onscroll = function(){
// select place of section on scroll
let HomeoffsetTop = HomeSection.offsetTop;
// select place of section on scroll
let HomeoffsetHeight = HomeSection.offsetHeight;
// select place of section on scroll
let AboutoffsetTop = AboutSection.offsetTop;
// select place of section on scroll
let AboutoffsetHeight = AboutSection.offsetHeight;
// select place of section on scroll
let serveroffsetTop = serverSection.offsetTop;
// select place of section on scroll
let serveroffsetHeight = serverSection.offsetHeight;
// select place of section on scroll
let otheroffsetTop = otherSection.offsetTop;
// select place of section on scroll
let otheroffsetHeight = otherSection.offsetHeight;
 //window height
 var windowheight = this.innerHeight;
 //window scrollTop
 var windowscrollTop = this.pageYOffset;
 let a = document.getElementsByClassName("btn");
 if(windowscrollTop > (HomeoffsetTop + HomeoffsetHeight - windowheight)){
     for(let i=0 ; i < a.length ; i++){
        a[i].classList.remove("active");
     }
    a[1].classList.add("active");
}
else if(windowscrollTop > (AboutoffsetTop + AboutoffsetHeight - windowheight)){
    for(let i=0 ; i < a.length ; i++){
        a[i].classList.remove("active");
     }
    a[0].classList.add("active");
}
if(windowscrollTop > (serveroffsetTop + serveroffsetHeight - windowheight)){
    for(let i=0 ; i < a.length ; i++){
        a[i].classList.remove("active");
     }
    a[2].classList.add("active");
    console.log("arrive");
}
if(windowscrollTop > (otheroffsetTop + otheroffsetHeight - windowheight)){
    for(let i=0 ; i < a.length ; i++){
        a[i].classList.remove("active");
     }
    a[3].classList.add("active");
    console.log("arrive");
}
}


   

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click
let link = document.querySelectorAll("nav li a");
link.forEach(a => {
    a.addEventListener('click',(e)=>{
        if(a.textContent==="About"){
           e.target.href="#section1";
       }
       else if(a.textContent==="Server"){
           e.target.href="#section2";
       }
       else if(a.textContent==="Other"){
           e.target.href="#section3";
       }
    });
});
// Set sections as active


