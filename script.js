// **************** General variables
const backgroundBlue = '#011e48';
const moonWhite = '#f7fbfd';
const scndLevelBlue = '#010624';
const firstLevelBlue = '#00020e';
const windowsLight = '#ebc369';

const tablet = window.matchMedia("(max-width: 996px)");
const mobile = window.matchMedia("(max-width: 576px)");




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
const calender = document.querySelector('.wrapper-calender');
const hand_calender = document.querySelector('.hand-calender');
const prices = document.querySelector('.wrapper-price');

// Hover du SVG house
if (tablet.matches) {} 
else {
    house_path.addEventListener('mouseover', function(){    
        windows_path.style.fill = windowsLight;   
    
        windows_path.addEventListener('mouseover', function(){    
            windows_path.style.fill = windowsLight;   
        })
    })
    
    house_path.addEventListener('mouseout', function(){
        windows_path.style.fill = scndLevelBlue;
    })
}

// Click du SVG house

house_path.addEventListener('click', function(){
    if(mobile.matches){
        gsap.timeline()
        .to(hand_calender, {duration: 2, top: '-71%', ease: 'RoughEase.ease'})
        .to(hand_calender, {scale: '13', y: '400%'})
        .to(calender, {duration: 0, display: 'flex'})
        .to(calender, {duration: 0.2, opacity: 1})
    }
    else if (tablet.matches) { 
        gsap.timeline()
        .to(hand_calender, {duration: 2, top: '-30%', ease: 'RoughEase.ease'})
        .to(hand_calender, {scale: '11', y: '500%'})
        .to(calender, {duration: 0, display: 'flex'})
        .to(calender, {duration: 0.2, opacity: 1})
    } 
    else {
        gsap.timeline()
        .to(hand_calender, {duration: 2, top: '0%', ease: 'RoughEase.ease'})
        .to(hand_calender, {scale: '11', y: '500%'})
        .to(calender, {duration: 0, display: 'flex'})
        .to(calender, {duration: 0.2, opacity: 1})
    }    
});

windows_path.addEventListener('click', function(){
    if (tablet.matches) { 
        gsap.timeline()
        .to(hand_calender, {duration: 2, top: '-30%', ease: 'RoughEase.ease'})
        .to(hand_calender, {scale: '11', y: '500%'})
        .to(calender, {duration: 0, display: 'flex'})
        .to(calender, {duration: 0.2, opacity: 1})
    } else {
        gsap.timeline()
        .to(hand_calender, {duration: 2, top: '0%', ease: 'RoughEase.ease'})
        .to(hand_calender, {scale: '11', y: '500%'})
        .to(calender, {duration: 0, display: 'flex'})
        .to(calender, {duration: 0.2, opacity: 1})
    }
});

// **************** Pumpkin events

let pumpkin_path = document.querySelector('.body-pumpkin');
let pumpkin_face = document.querySelector('.face-pumpkin');

// Hover du SVG pumpkin
if (tablet.matches) {} 
else {
    pumpkin_path.addEventListener('mouseover', function(){    
        pumpkin_face.style.fill = windowsLight;   
        prices.style.opacity = 1;
    
        pumpkin_face.addEventListener('mouseover', function(){    
            pumpkin_face.style.fill = windowsLight;  
            prices.style.opacity = 1; 
        })
    })
    
    pumpkin_path.addEventListener('mouseout', function(){
        pumpkin_face.style.fill = firstLevelBlue;
        prices.style.opacity = 0; 
    })
}


// **************** Cross events

const cross_first = document.querySelector('.cross2');

const animation_cross = gsap.to(cross_first,{
    duration: 0.1,
    y: '1%', 
    repeat: -1,
    yoyo: true,
    paused: true
})

if (tablet.matches) { 
    animation_cross.play(); 
} else {
    cross_first.addEventListener('mouseover', function(){
        animation_cross.play();
    })
    
    cross_first.addEventListener('mouseout', function(){
        animation_cross.pause();
    })
}  


// **************** Leave alternate page

const btn_calender_home = document.querySelector('.btn-leave-calender');

btn_calender_home.addEventListener('click', function(){
    if (tablet.matches) { 
        gsap.timeline()
        .to(calender, {opacity: 0})
        .to(calender, {duration: 0, display: 'none'})
        .to(hand_calender, {scale: '1', y: '0%'})
        .to(hand_calender, {duration: 2, top: '90%', ease: 'RoughEase.ease'}) 
    } else {
        gsap.timeline()
        .to(calender, {opacity: 0})
        .to(calender, {duration: 0, display: 'none'})
        .to(hand_calender, {scale: '1', y: '0%'})
        .to(hand_calender, {duration: 2, top: '90%', ease: 'RoughEase.ease'}) 
    }      
})

// **************** Calender creation

const grid_calender = document.querySelector('.grid-calender');
let content_calender = '';

for(var index = 1; index < 32; index++){
    var openOrClosed = '';
    var weekday = '';

    switch(index){
        case 1 : case 8: case 15: case 22: case 29:
            weekday = 'Thursday';
            openOrClosed = 'closed-icon';
        break;  
        case 2 : case 9: case 16: case 23: case 30:
            weekday = 'Friday';
            openOrClosed = 'open-icon';
        break;  
        case 3 : case 10: case 17: case 24: case 31:
            weekday = 'Saturday';
            openOrClosed = 'open-icon';
        break;      
        case 4 : case 11: case 18: case 25: case 31:
            weekday = 'Sunday';
            openOrClosed = 'open-icon';
        break; 
        case 5 : case 12: case 19: case 26:
            weekday = 'Monday';
            openOrClosed = 'closed-icon';
        break; 
        case 6 : case 13: case 20: case 27:
            weekday = 'Tuesday';
            openOrClosed = 'closed-icon';
        break; 
        case 7 : case 14: case 21: case 28:
            weekday = 'Wednesday';
            openOrClosed = 'closed-icon';
        break; 
    }

    content_calender += '<div class="grid-element">';
    content_calender += '<div class="icon-calender ' + openOrClosed + '"></div>';
    content_calender += '<p>October, ' + index + '</p>';
    content_calender += '<p class="week-day">' + weekday + '</p>';
    content_calender += '</div>';
}

document.querySelector('.grid-calender').innerHTML = content_calender;

// **************** Open credits

const btn_credits = document.querySelector('.toggle-credits');
const box_credits = document.querySelector('.wrapper-credits');
let toggle_credit = 0;

btn_credits.addEventListener('click', function(){
    if(toggle_credit == 0){
        box_credits.style.transform = 'translateY(0%)';
        btn_credits.children[0].style.display = 'none';
        btn_credits.children[1].style.display = 'block';
        toggle_credit = 1;
    }
    else{
        box_credits.style.transform = 'translateY(-100%)';
        btn_credits.children[0].style.display = 'block';
        btn_credits.children[1].style.display = 'none';
        toggle_credit = 0;
    }
})
