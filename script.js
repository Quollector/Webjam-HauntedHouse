// **************** General variables
const backgroundBlue = '#011e48';
const moonWhite = '#f7fbfd';
const scndLevelBlue = '#010624';
const firstLevelBlue = '#00020e';
const windowsLight = '#ebc369';




// **************** Background animations
let clouds = document.querySelectorAll('.cloud');

// Taille et hauteur aléatoire des nuages
for(var i = 0; i < clouds.length; i++){
    let scaleMax = 1.5;
    let scaleMin = 0.5;
    clouds[i].style.top = Math.floor(Math.random()* 30)  + 1 + '%';
    clouds[i].style.scale = Math.random() * (scaleMax - scaleMin) + scaleMin;
}

// Animation des nuages
gsap.timeline({    
    defaults:{
        left: '0%', 
        transform: 'translateX(-100%)',
        repeat: -1,
        ease: 'linear'
    }
})
    .to('.cloud-1', {
        duration: Math.floor( Math.random() * 15) + 30
    }, '<')
    .to('.cloud-2', {
        duration: Math.floor( Math.random() * 15) + 30,
        delay: Math.floor( Math.random() * 5) + 10
    }, '<')
    .to('.cloud-3', {
        duration: Math.floor( Math.random() * 15) + 30,
        delay: Math.floor( Math.random() * 5) + 10
    }, '<')
    .to('.cloud-4', {
        duration: Math.floor( Math.random() * 15) + 30,
        delay: Math.floor( Math.random() * 5) + 10
    }, '<')
    .to('.cloud-5', {
        duration: Math.floor( Math.random() * 15) + 30,
        delay: Math.floor( Math.random() * 5) + 10
    }, '<')

// Animation des arbres
gsap.timeline({
    defaults:{
        duration: 4,
        yoyo: true,
        repeat: -1, 
        ease: 'slow'
    }
})
    .to('.dead-tree', {
        transform: 'rotate(-2deg)'
    })
    .to('.dead-tree2', {
        transform: 'rotate(2deg)'
    }, '<')
    .to('.dead-tree3', {
        transform: 'rotate(2deg)'
    }, '<')
    .to('.dead-tree4', {
        transform: 'rotate(-2deg)'
    }, '<')

// Animation de la main
gsap.timeline({
    repeat: -1,
    repeatDelay: Math.floor( Math.random() * 15) + 30,
    defaults:{
        duration: 4,
    }
})
.to('.zombie-hand',{
    duration: 4,
    y: '-80%'
})
.to('.zombie-hand',{
    duration: 4,
    y: '0%',
    delay: 2
})




// **************** House events

let house_path = document.querySelector('.house-path');
let windows_path = document.querySelector('.windows-path');

// Hover du SVG house
house_path.addEventListener('mouseover', function(){    
    windows_path.style.fill = windowsLight;   

    windows_path.addEventListener('mouseover', function(){    
        windows_path.style.fill = windowsLight;   
    })
})

house_path.addEventListener('mouseout', function(){
    windows_path.style.fill = scndLevelBlue;
})

// **************** Pumpkin events

let pumpkin_path = document.querySelector('.body-pumpkin');
let pumpkin_face = document.querySelector('.face-pumpkin');

// Hover du SVG pumpkin
pumpkin_path.addEventListener('mouseover', function(){    
    pumpkin_face.style.fill = windowsLight;   

    pumpkin_face.addEventListener('mouseover', function(){    
        pumpkin_face.style.fill = windowsLight;   
    })
})-

pumpkin_path.addEventListener('mouseout', function(){
    pumpkin_face.style.fill = firstLevelBlue;
})
    