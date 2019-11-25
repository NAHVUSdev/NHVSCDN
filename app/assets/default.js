// JAVASCRIPT FROM: nahvuscdn.com
// MODIFIED FOR: Project Kenai
var window;
var document;
var menuLinks = document.getElementById("menuLink");
var dynamic = document.getElementById("dynamic");
var Cookies;


function popperClose() {
    "use strict";
    Cookies.set('popper', 'false', { expires: 3 });
}

if (Cookies.get('popper') === "false") {
    popperClose();
}

function pageInit() {
    "use strict";
    menuLinks.style.transition = ".5s";
    dynamic.style.transition = ".5s";
}

window.onload = pageInit;
