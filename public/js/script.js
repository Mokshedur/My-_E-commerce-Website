const menu = document.querySelector('.menu');
const menuSection = menu.querySelector('.menu-section');
const menuArrow = menu.querySelector('.menu-mobile-arrow');
const menuClosed = menu.querySelector('.menu-mobile-close');
const menuToggle = document.querySelector('.menu-mobile-toggle');
const menuOverlay = document.querySelector('.overlay');
let subMenu;

menuSection.addEventListener('click', (e) => {
    if (!menu.classList.contains('active')) {
        return;
    }
    if (e.target.closest('.menu-item-has-children')) {
        const hasChildren = e.target.closest('.menu-item-has-children');
        showSubMenu(hasChildren);
    }
});

menuArrow.addEventListener('click', () => {
    hideSubMenu();
});

menuToggle.addEventListener('click', () => {
    toggleMenu();
});

menuClosed.addEventListener('click', () => {
    toggleMenu();
});

menuOverlay.addEventListener('click', () => {
    toggleMenu();
});

// Show & Hide Toggle Menu Function
function toggleMenu() {
    menu.classList.toggle('active');
    menuOverlay.classList.toggle('active');
}

// Show the Mobile Side Menu Function
function showSubMenu(hasChildren) {
    subMenu = hasChildren.querySelector('.menu-subs');
    subMenu.classList.add('active');
    subMenu.style.animation = 'slideLeft 0.5s ease forwards';
    const menuTitle = hasChildren.querySelector('i').parentNode.childNodes[0].textContent;
    menu.querySelector('.menu-mobile-title').innerHTML = menuTitle;
    menu.querySelector('.menu-mobile-header').classList.add('active');
}

// Hide the Mobile Side Menu Function
function hideSubMenu() {
    subMenu.style.animation = 'slideRight 0.5s ease forwards';
    setTimeout(() => {
        subMenu.classList.remove('active');
    }, 300);

    menu.querySelector('.menu-mobile-title').innerHTML = '';
    menu.querySelector('.menu-mobile-header').classList.remove('active');
}

// Windows Screen Resizes Function
window.onresize = function() {
    if (this.innerWidth > 991) {
        if (menu.classList.contains('active')) {
            toggleMenu();
        }
    }
};

// var
// var A = document.getElementById("ami")
// A.addEventListener("mouseover", function() {

//     document.getElementById("div2").style.display = '';
//     document.getElementById("div3").style.display = '';
//     document.getElementById("div4").style.display = '';
//     document.getElementById("ami1").style.display = '';
//     document.getElementById("ami2").style.display = '';
//     document.getElementById("ami3").style.display = '';
//     document.getElementById("div2").style.padding = '2rem';
//     document.getElementById("div3").style.display.padding = '2rem';
//     document.getElementById("div4").style.display.padding = '2rem';


// })
// A.removeEventListener('mouseout', setTimeout)
// setTimeout(() => {
//     document.getElementById("div2").style.display = 'none';
//     document.getElementById("div3").style.display = 'none';
//     document.getElementById("div4").style.display = 'none';
//     document.getElementById("ami1").style.display = 'none';
//     document.getElementById("ami2").style.display = 'none';
//     document.getElementById("ami3").style.display = 'none';

// }, 5000);
// var B = document.getElementById("prod")
// B.addEventListener("mouseover", function() {

//     document.getElementById("div5").style.display = '';
//     document.getElementById("div6").style.display = '';
//     document.getElementById("div7").style.display = '';
//     document.getElementById("ami5").style.display = '';
//     document.getElementById("ami6").style.display = '';
//     document.getElementById("ami7").style.display = '';
//     document.getElementById("div5").style.padding = '2rem';
//     document.getElementById("div6").style.display.padding = '2rem';
//     document.getElementById("div7").style.display.padding = '2rem';


// })
// B.removeEventListener('mouseout', setTimeout)
// setTimeout(() => {
//     document.getElementById("div5").style.display = 'none';
//     document.getElementById("div6").style.display = 'none';
//     document.getElementById("div7").style.display = 'none';
//     document.getElementById("ami5").style.display = 'none';
//     document.getElementById("ami6").style.display = 'none';
//     document.getElementById("ami7").style.display = 'none';

// }, 5000);


// // })



// // var B = document.createElement("h1");
// // var text = document.createTextNode("Hi, I am Momin")
// // B.appendChild(text);
// // document.body.appendChild(B);
// // adding img
// // var img = document.getElementById("example");
// // console.log(img.getAttribute("src"));
// // var img = document.createElement("img");
// // var h1 = document.createElement("h3");
// // var text1 = document.createTextNode("This is me ")
// // h1.appendChild(text1);
// // h1.classList.add("h1");
// // var text2 = document.createTextNode("hi, I am Momin. I came from Bangladesh ")
// // var p = document.createElement("p");
// // p.classList.add("p");
// // p.appendChild(text2)
// //     // // document.img.style.display = "flex";
// // img.classList.add("img");
// // // // document.getElementsByTagName('img').style.justifyContent = "flex-start";
// // img.src = "img/1.jpg";



// // img.style.display = "flex";
// // var A = document.getElementById("ami")

// var block = document.getElementById("x");
// block.appendChild(img);
// block.appendChild(h1)
// block.appendChild(p)

// // var container = document.getElementById("grid");
// // var cell = document.createElement("div");
// // cell.innerHTML = "TEXT";
// // container.appendChild(cell);

// start fromhere