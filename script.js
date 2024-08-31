

const mobile_nav=document.querySelector(".mobile-nav-button")
const nav_header=document.querySelector(".header")
    
const toggleNavbar = ()=>{
nav_header.classList.toggle("active");
}


mobile_nav.addEventListener("click",() => toggleNavbar() );

gsap.from('.nav-links li', {
y:-200,
stagger:0.2,
scrub:0.2
})