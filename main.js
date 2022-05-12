const toggleBtn = document.getElementById('toggle')
let navbar = document.getElementById('style')
let header = document.getElementById('header');
let remove = document.getElementById('remove')
let remove1 = document.getElementById('remove1')
console.log(remove);

toggleBtn.addEventListener('click', () =>{
    navbar.classList.toggle('toggle')
})


let animation = document.getElementById('toggle');

toggleBtn.addEventListener('click', () => {
    toggleBtn.classList.toggle('close')
    header.classList.toggle('sticky')
})

remove.addEventListener('click', () =>{
    navbar.classList.remove('toggle')
    toggleBtn.classList.remove('close')
    header.classList.remove('sticky')
})
remove1.addEventListener('click', () =>{
    navbar.classList.remove('toggle')
    toggleBtn.classList.remove('close')
    header.classList.remove('sticky')
})


console.log(window.innerHeight);



let animations = document.querySelectorAll('.animation')

console.log(animations);

window.addEventListener('scroll', () =>{
    
    animations.forEach((animation) =>{
        
        let windowheight = window.innerHeight;
        let revealtop = animation.getBoundingClientRect().top
        let revealpoint = 100;
    
        if(revealtop < windowheight - revealpoint){
            animation.classList.add('active')
        }
        else{
            animation.classList.remove('active')
        } 
    })
})

// add efect on load :) !!!

// window.addEventListener('load', () =>{

// })