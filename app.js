const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');

const navItems = document.querySelectorAll('.nav-item');
const navLink = document.querySelector('.menu-nav');

let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

//MOJ JS

navLink.addEventListener('click', function(event){
    if(showMenu) {
        if (event.target.classList.contains('nav-link')){
            console.log('clicked');
            menuBtn.classList.remove('close');
            menu.classList.remove('show');
            menuNav.classList.remove('show');

            navItems.forEach(item => item.classList.remove('show'));

            //Set menu state
            showMenu = false;
        }
       
    }
    
});




function toggleMenu() {
    if(!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
       
        navItems.forEach(item => item.classList.add('show'));

        //Set menu state
        showMenu = true;
    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
       
        navItems.forEach(item => item.classList.remove('show'));

        //Set menu state
        showMenu = false;
    }
}



// scroll spy

(function () {
    'use strict';

    var section = document.querySelectorAll(".section");
    var sections = {};
    var i = 0;

    Array.prototype.forEach.call(section, function (e) {
        sections[e.id] = e.offsetTop;
    });

    window.onscroll = function () {
        var scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

        for (i in sections) {
            if (sections[i] <= scrollPosition) {
                document.querySelector('.current').setAttribute('class', ' ');
                document.querySelector('a[href*=' + i + ']').setAttribute('class', 'current');
            }
        }
    };
})();
