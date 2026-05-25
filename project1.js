let navlinks = document.querySelectorAll('.nav-link');
let buttons = document.getElementsByClassName('.but');
navlinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' })
        
    });
});
buttons.forEach(button => {
    button.addEventListener("click",(e)=>{
       alert("button clicked");
    });
});
