var menuBtn = document.querySelector('.menuBtn');
var sideNav = document.querySelector('.main-links');
var mainNav = document.querySelector('.main-nav');
var goTop = document.querySelector('.gotop');
    
menuBtn.addEventListener('click', openNav);
goTop.addEventListener('click', goToUp);
window.addEventListener('scroll', showHide)

    
function openNav(){
    sideNav.classList.toggle('active-nav');
    menuBtn.classList.toggle('changeIcon');
}



function showHide(){
    if(window.pageYOffset > 100){
        goTop.style.display = 'block';
        mainNav.classList.add('active-header');
        sideNav.classList.add('hide-nav');
    } else{
        goTop.style.display = 'none';
        sideNav.classList.remove('active-nav');
        menuBtn.classList.remove('changeIcon');
        sideNav.classList.remove('hide-nav');
        mainNav.classList.remove('active-header');
    }
    
    sideNav.classList.toggle('hide-nav');
}

function goToUp(){
    window.scrollTo(0,0);
}